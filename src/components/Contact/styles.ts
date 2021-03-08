import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CO;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #F1F1F1;
`;

export const ContainerMensagem = styled.div`
    width: 700px;
    height: 60vh;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Titulo = styled.h2`
    font-size:30px;
    margin-bottom:10px;
`;

export const InfoTexto = styled.h4`
    display: flex;

    align-self:flex-start;

    margin-left:15px;
    margin-bottom: 5px;
    margin-top:10px;
    font-size: 18px;
`;

export const CaixaInfo = styled.input`
    width: 700px;
    height: 25px;

    border-radius: 5px;
    
`;

export const CaixaMensagem = styled.input`
    width: 700px;
    height: 200px;

    border-radius: 5px;
    
`;

export const Button = styled.button`
    margin-top: 15px;

    text-decoration: none;
    border-radius: 5px;
    width:100px;
    height:50px;
    font-size:20px;
    background-color: lightblue;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .8;
        transform: translateX(2px);
    }

    
`;

export const ContainerInfos = styled.div`
    width: 800px;
    height: 20vh;

    display:flex;
    align-items: center;
    flex-direction: column;

`;

export const InfoTextoEndereco = styled.h4`
    margin-top:15px;
`;

export const InfoTextoNegrito = styled.h4`
    font-size: 25px;
`;