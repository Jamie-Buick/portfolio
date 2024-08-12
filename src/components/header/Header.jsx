import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/J.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">


          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="#clientwork">Client Work</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/Jamie-Buick?tab=repositories">Personal Work</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>

  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header