import { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router";
import logo from "../../assets/2.png";
import "../../styles/menu.css";
import Login from "../Login";
import Register from "../Registro";

function Menu() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCloseAll = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom" sticky="top">
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
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/productos" className="nav-link">
              Productos
            </NavLink>
            <NavLink to="/nosotros" className="nav-link">
              Sobre Nosotros
            </NavLink>
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>

            {/* Botón de login */}
            <Button
              variant="outline-light"
              className="d-flex align-items-center gap-1"
              onClick={handleShowLogin}
            >
              <i className="bi bi-person-circle fs-5"></i>
              <span className="d-none d-sm-inline">Login</span>
            </Button>

            <NavLink to="/admin">
              <Button variant="warning" className="btn-shop fw-semibold">
                Administrador
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modales */}
      <Login
        show={showLogin}
        handleClose={handleCloseAll}
        handleShowRegister={handleShowRegister}
      />
      <Register
        show={showRegister}
        handleClose={handleCloseAll}
        handleShowLogin={handleShowLogin}
      />
    </>
  );
}

export default Menu;
