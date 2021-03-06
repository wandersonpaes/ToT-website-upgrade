import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;

    width: 100vw;
    height: 80px;
    position: fixed;

    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
`;

export const LogImg = styled.img`
    margin-left: 30px;
`;

export const ContainerMenu = styled.nav`
    display: flex;
    flex-direction: row;

    margin-right: 30px; 
`;

export const MenuItemLink = styled.a`
    margin-right: 20px;
    text-decoration: none;
    color:black;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .8;
        transform: translateX(5px);
    }
`;