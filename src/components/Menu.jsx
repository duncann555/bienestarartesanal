import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/2.png"; // si tenés un logo

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          {logo && (
            <img
              src={logo}
              alt="Bienestar Artesanal logo"
              width="40"
              height="40"
              className="me-2 rounded-circle shadow-sm"
            />
          )}
          <span className="brand-text">Bienestar Artesanal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#sobre">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Button variant="light" className="btn-shop">Ver Tienda</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
