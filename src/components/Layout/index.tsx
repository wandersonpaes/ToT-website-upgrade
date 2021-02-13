import React from 'react';
import { Container } from './styles';

import Apresentation from '../Apresentation';
import MainHeader from '../MainHeader';
import Content from '../Content';
import Staff from '../Staff';
import Contact from '../Contact';
import MainFooter from '../MainFooter';

const Layout: React.FC = () => {
    return (
        <Container>
            <MainHeader />
            <Apresentation />
            <Content />
            <Staff />
            <Contact />
            <MainFooter />
        </Container>
    );
}

export default Layout;