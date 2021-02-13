import React from 'react';
import { 
    Container,
    LogImg,
    MenuItemLink,
    ContainerMenu 
} from './styles';

import iconHeader from '../../assets/iconHeader.png';

const MainHeader: React.FC = () => {
    return (
        <Container>
            <LogImg src={iconHeader}/>

            <ContainerMenu>
                <MenuItemLink href="#">
                    Sobre
                </MenuItemLink>

                <MenuItemLink href="#">
                    Equipe
                </MenuItemLink>

                <MenuItemLink href="#">
                    Contato
                </MenuItemLink>
            </ContainerMenu>
        </Container>
    );
}

export default MainHeader;