import styled from 'styled-components';
import fundo from '../../assets/office.png';

export const Container = styled.div`
    grid-area: AP;

    width: 100vw;
    height: 100vh;

    background-image: url(${fundo});

    display: flex;

    flex-direction: column;
    align-items: center;
`;

export const LogoImg = styled.img`
    padding: 100px;
`;

export const Texto = styled.h3`
    color: white;
`;

export const ContainerButton = styled.div`
    display: flex;

    flex-direction: row;

    padding: 100px 0;
`;

export const Button = styled.button`
    margin-right: 15px;

    text-decoration: none;
    border-radius: 5px;
    width:100px;
    height:50px;
    font-size:15px;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .8;
        transform: translateX(2px);
    }
`;