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
                <Button>Saiba +</Button>
                <Button>Contato</Button>
               </ContainerButton> 
        </Container>
    );
}

export default Apresentation;