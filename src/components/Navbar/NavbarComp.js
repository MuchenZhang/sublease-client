import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './stylesheet.css';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-container">
                    <Container>
                        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                                                        
                        </Nav>
                        <Nav>
                            <Nav.Link href="#postings">Postings</Nav.Link>
                            <NavDropdown title="Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Favorites</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                My Postings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComp;
