import React from 'react';
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="src/assets/images/J.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>

          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="#clientwork">Client Work</NavDropdown.Item>
            <NavDropdown.Item href="#personalwork">Personal Work</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>

          {/* Social Media Icons */}
          <Nav className="ms-3">
            <Nav.Link href="https://github.com/Jamie-Buick" target="_blank">
              <i className="fab fa-github"></i>
            </Nav.Link>
        
            <Nav.Link href="https://www.linkedin.com/in/jamie-buick-809912173/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </Nav.Link>
            <Nav.Link href="mailto:jamiebuick28@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header