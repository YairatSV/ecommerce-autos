import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">AutoPlus</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#welcome">Te damos la bienvenida</Nav.Link>
                        <Nav.Link href="#login">Ingresar</Nav.Link>
                        <Nav.Link href="#financing">Paga a meses</Nav.Link>
                        <Nav.Link href="#buy">Compra un auto</Nav.Link>
                        <Nav.Link href="#sell">Vende tu auto</Nav.Link>
                        <Nav.Link href="#care">Cuida tu auto</Nav.Link>
                        <Nav.Link href="#about">Nosotros</Nav.Link>
                        <Nav.Link href="#help">Ayuda</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#country">País</Nav.Link>
                        <Nav.Link href="#filter">Filtrar por</Nav.Link>
                        <Nav.Link href="#brand-model">Marca y modelo</Nav.Link>
                        <Nav.Link href="#year">Año</Nav.Link>
                        <Nav.Link href="#type">Tipo</Nav.Link>
                        <Nav.Link href="#location">Ubicación</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
