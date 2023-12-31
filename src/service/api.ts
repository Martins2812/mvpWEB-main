import axios from "axios";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/authProvider/util";

/* Criação de nova instance com url e Headers. */
const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

/* Adiciona o token de acesso ao cabeçalho do pedido. */
instance.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    if (user !== null) {
      config.headers["Authorization"] = "Bearer " + user?.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* Interceptar a resposta e verificar se ela é 401 (não autorizada) e, se for, tentar atualizar o token. */
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const user = getUserLocalStorage();
    const originalConfig = err.config;

    if (
      originalConfig.url !== "/auth/signin" &&
      err.response &&
      originalConfig.url !== "/auth/refreshtoken"
    ) {
      // Access Token estava expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: user?.refreshToken,
          });
          setUserLocalStorage(rs.data);

          return instance(originalConfig);
        } catch (_error) {
          throw new Error("Failed to refresh token");
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
