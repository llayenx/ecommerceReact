import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }
    return (
        
            <Navbar bg="light" expand="md">
                <Container>
                <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as= {Link}  to ="/login">Login</Nav.Link>
                            <Nav.Link as= {Link}  to ="/product/id">Product Detail</Nav.Link>
                            <Nav.Link as= {Link}  to ="/purchases">Purchases</Nav.Link>
                            <Nav.Link onClick={logout} >Log out</Nav.Link>
                            <Nav.Link>Cart </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
    );
};

export default AppNavbar;