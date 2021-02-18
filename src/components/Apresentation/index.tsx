import React from 'react';
import { 
    Container,
    LogoImg,
    Texto,
    ContainerButton,
    Button
} from './styles';

import logoBranco from '../../assets/Logo ToT - Branco.png';

const Apresentation: React.FC = () => {
    return (
        <Container>
           <LogoImg src={logoBranco}/>

            <Texto>
                Texto sobre o ToT
            </Texto>

            <ContainerButton>
                <a href="#content">
                <Button>Saiba +</Button>
                </a>
                <a href="#contact">
                    <Button>Contato</Button>
                </a>
            </ContainerButton> 
        </Container>
    );
}

export default Apresentation;