import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;

    width: 100vw;
    height: 70px;
    position: fixed;

    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
`;

export const LogImg = styled.img`
    margin-left: 10px;
`;

export const ContainerMenu = styled.nav`
    display: flex;
    flex-direction: row;

    margin-right: 30px; 
`;

export const MenuItemLink = styled.a`
    margin-right: 15px;
`;