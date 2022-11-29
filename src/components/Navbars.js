import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbars.css';

const Navbars = () => {
  return (
    <div className='nav-bar'>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='main_navbar'>
        <Container>
        <Nav.Link href="/" className='navbar'>Home</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="/portfolio" className='navbar'>Portfolio</Nav.Link>
            <Nav.Link href="/contact" className='navbar'>Contact</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link href="https://github.com/Abdulrauf10" target='#' className='navbar'>GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/muhammad-abdul-rauf-44b5a1171/" target='#' className='navbar'>Linkedin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars;
