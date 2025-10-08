import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles/contacto.css";

import Swal from "sweetalert2";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Mensaje enviado ✅",
      text: "Gracias por contactarte con Bienestar Artesanal. Te responderemos a la brevedad 🌿",
      icon: "success",
      confirmButtonColor: "#198754",
    });
    e.target.reset();
  };

  return (
    <>
      {/* 🌿 Encabezado */}
      <section className="bg-success text-white text-center py-5">
        <Container>
          <h1 className="fw-bold mb-3">Contacto</h1>
          <p className="lead mb-0">
            Estamos acá para ayudarte. Escribinos tus dudas o consultas sobre nuestros productos naturales 💚
          </p>
        </Container>
      </section>

      {/* 📩 Formulario de contacto */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card className="shadow border-0">
                <Card.Body>
                  <h4 className="text-center text-success fw-bold mb-4">
                    Envíanos un mensaje
                  </h4>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nombre">
                      <Form.Label>Nombre completo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ej: juanperez@gmail.com"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mensaje">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Escribí tu consulta..."
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">
                        Enviar mensaje ✉️
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 📍 Información de contacto */}
      <section className="py-5">
        <Container>
          <h3 className="text-center text-success fw-bold mb-4">
            O encontranos en nuestras redes 🌎
          </h3>
          <Row className="text-center justify-content-center">
            <Col xs={12} md={4} className="mb-4">
              <i className="bi bi-envelope-fill fs-2 text-success"></i>
              <p className="mt-2">bienestarnatural@gmail.com</p>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <i className="bi bi-instagram fs-2 text-success"></i>
              <p className="mt-2">@bienestar.artesanal</p>
            </Col>
            <Col xs={12} md={4}>
              <i className="bi bi-geo-alt-fill fs-2 text-success"></i>
              <p className="mt-2">San Miguel de Tucumán, Argentina</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🗺️ Mapa (opcional) */}
      <section className="py-4 bg-success bg-opacity-10 border-top">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.791152726877!2d-65.20987782506773!3d-26.822548976698816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422437ff0a8a95b%3A0xe2b26f9eaf7b1b27!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacto;
