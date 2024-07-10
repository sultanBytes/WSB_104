import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//images
import logo from './../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLanguage } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="px-1">
                <Container fluid>
                    <Navbar.Brand href="#" className='logo'>
                        <Link to='/'>
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navbar-links"
                            
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/pdf-catelog">PDF Catelog</Nav.Link>
                            <Nav.Link href="#">Collections By Mistry.Store</Nav.Link>
                            <Nav.Link href="/pdf-catelog">About Us</Nav.Link>
                            <Nav.Link href="/pdf-catelog">Contact Us</Nav.Link>
                            <Nav.Link href="/pdf-catelog">Blogs</Nav.Link>
                        </Nav>
                        <div className='d-flex align-items-center'>
                            <Nav.Link href="/pdf-catelog">
                            <span className='navbar-icons'>
                                <FaLanguage/>
                            </span>
                            </Nav.Link>
                            <Nav.Link href="/pdf-catelog">
                            <span className='navbar-icons'>
                                <FiPhoneCall/>
                            </span>
                            </Nav.Link>
                            <Nav.Link href="/pdf-catelog">
                            <button className='login-btn'>Login</button>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header