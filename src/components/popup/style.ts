import styled from 'styled-components';

export const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  
    background: rgba(0, 0, 0, 0.2);
  
    display: flex;
  
    justify-content: center;
    align-items: center;
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background: white;
  border-radius: 8px;

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    color: red;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background-color: white;

    transition: color 0.3s;

    &:hover {
      color: rgb(0, 0, 0);
    }
  }
`;