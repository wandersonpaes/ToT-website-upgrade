import React from 'react';
import { 
    Container,
    ContainerMensagem,
    Titulo,
    InfoTexto,
    InfoTextoEndereco,
    CaixaInfo,
    CaixaMensagem,
    ContainerInfos,
    Button,
    InfoTextoNegrito 
} from './styles';

const Contact: React.FC = () => {
    return (
        <Container id="contact">

            <ContainerMensagem>
                <Titulo>Envie uma mensagem</Titulo>

                <InfoTexto>Seu nome</InfoTexto>
                <CaixaInfo></CaixaInfo>

                <InfoTexto>Seu e-mail</InfoTexto>
                <CaixaInfo></CaixaInfo>

                <InfoTexto>Assunto</InfoTexto>
                <CaixaInfo></CaixaInfo>

                <InfoTexto>Sua mensagem</InfoTexto>
                <CaixaMensagem></CaixaMensagem>

                <Button>Enviar</Button>

            </ContainerMensagem>

            <ContainerInfos>

                <InfoTextoNegrito>Endereço</InfoTextoNegrito>
                <InfoTextoEndereco>
                    Prédio C3 - FURG Av. Itália, s/n - Km 8 - Carreiros, Rio Grande - RS
                </InfoTextoEndereco>

            </ContainerInfos>
            
        </Container>
    );
}

export default Contact;