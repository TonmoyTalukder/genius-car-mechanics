import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home" className="btn-secondary text-light rounded header-nav-button ms-2">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="btn-secondary text-light rounded header-nav-button ms-2">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts" className="btn-secondary text-light rounded header-nav-button ms-2">Experts</Nav.Link>
                            <Nav.Link as={HashLink} to="/addService" className="btn-secondary text-light rounded header-nav-button ms-2">Add Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/manageServices" className="btn-secondary text-light rounded header-nav-button ms-2">Manage Services</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} className="rounded mx-3" variant="light">Logout</Button>:
                                <Nav.Link as={Link} to="/login" className="header-nav-button mx-3">Login</Nav.Link>
                            
                            }
                        <Navbar.Text>
                            <p className="my-2">{user?.email ?<>Signed in as: </>:<></>} <a className="text-decoration-none" href="#login">{user?.displayName}</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;