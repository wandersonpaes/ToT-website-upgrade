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
            <MenuItemLink href="#">
                <LogImg src={iconHeader}/>
            </MenuItemLink>

            <ContainerMenu>
                <MenuItemLink href="#content">
                    Sobre
                </MenuItemLink>

                <MenuItemLink href="#staff">
                    Equipe
                </MenuItemLink>

                <MenuItemLink href="#contact">
                    Contato
                </MenuItemLink>
            </ContainerMenu>
        </Container>
    );
}

export default MainHeader;