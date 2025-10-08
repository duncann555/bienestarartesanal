import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <Footer className="footer mt-auto py-4">
      <Container>
        <Row className="gy-3 text-center text-md-start">
          {/* Columna 1: Marca */}
          <Col md={4}>
            <h5 className="footer-brand">Bienestar Artesanal</h5>
            <p className="small">
              Productos naturales y fitoterapéuticos elaborados con dedicación y respeto por la tradición herbal.
            </p>
          </Col>

          {/* Columna 2: Navegación */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Enlaces</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#sobre">Sobre Nosotros</a></li>
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
            © {new Date().getFullYear()} Bienestar Artesanal · Todos los derechos reservados
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}

export default Footer;
