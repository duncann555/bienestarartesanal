import { Link } from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../styles/footer.css";
import logo from "../../assets/2.png";

function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row className="gy-3 text-center text-md-start">
          {/* Columna 1: Marca */}
          <Col md={4}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <img
                src={logo}
                alt="Logo Bienestar Artesanal"
                className="footer-logo me-2"
              />
              <h5 className="footer-brand mb-0">Bienestar Artesanal</h5>
            </div>
            <p className="small text-muted text-center text-md-start">
              Productos naturales y fitoterapéuticos elaborados con dedicación y
              respeto por la tradición herbal.
            </p>
          </Col>

          {/* Columna 2: Navegación */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Enlaces</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/" className="text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-decoration-none">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-decoration-none">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-decoration-none">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Redes */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Seguinos en Instagram</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://www.instagram.com/bienestarartesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col className="text-center small text-muted">
            © 2025 Bienestar Artesanal · Todos los derechos reservados
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
