import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/2.png"; // si tenés un logo

function NavBar() {
  const navigate = useNavigate(); // 👈 Hook para redirigir programáticamente

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

            {/* ✅ Botón que redirige a /admin */}
            <Button
              variant="warning"
              className="btn-shop fw-semibold"
              onClick={() => navigate("/admin")}
            >
              Administrador
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
