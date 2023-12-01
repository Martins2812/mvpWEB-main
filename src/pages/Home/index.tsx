import { HomeContainer, HomeBackground, HomeDescript, DescriptText, Test, ButtonAccess,Logo ,HomeImageIlustration} from './style';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import logo from '../../assets/logoUnifeso.png';

export function Home() {
    const navigate = useNavigate();
    return(
        <HomeContainer>
            <Navbar />
            <HomeBackground>
                <HomeDescript>
                    <Test>
                        <div>
                            <Logo src={logo} />
                        </div>
                        <DescriptText>
                            <h1>UNIFESO Abilities</h1>
                            <p>A project created for the UNIFESO faculty - Centro Universitário Serra dos Órgãos. Here's where your skills shine.</p>
                        </DescriptText>
                        <ButtonAccess onClick={() => navigate('/catalog')}>
                            See the abilities
                        </ButtonAccess>
                    </Test>
                </HomeDescript>
                <HomeImageIlustration />
            </HomeBackground>
        </HomeContainer>
    )
}