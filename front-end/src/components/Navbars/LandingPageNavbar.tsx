import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                <Navbar.Brand as={Link} to="/">Mapa Numerológiconpm</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Cadastre-se</Nav.Link>
                    <Nav.Link href="#memes">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LandingPageNavbar;