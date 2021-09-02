import React from 'react';

//react-bootstrap
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';

const LandingPageNavbar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Mapa Numerológico</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LandingPageNavbar;