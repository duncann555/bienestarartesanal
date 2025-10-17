import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carrusel from "../components/Carrusel";

const Inicio = () => {
  return (
    <>
      {/* 🖼️ CARRUSEL PRINCIPAL */}
      <Container className="my-4">
        <Carrusel />
      </Container>

      {/* 🌿 SECCIÓN SOBRE PRODUCTOS NATURALES */}
      <section className="bg-light py-5 border-top border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/src/assets/13.png"
                alt="Productos naturales"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col md={6}>
              <h2 className="text-success fw-bold mb-3">
                Bienestar Natural, desde la Tierra
              </h2>
              <p className="text-muted">
                Nuestros productos son elaborados artesanalmente a base de
                ingredientes naturales seleccionados. 🌿  
                Creemos en la fitoterapia, en la energía de las plantas y su
                poder para sanar y equilibrar cuerpo y mente.
              </p>
              <p className="text-muted">
                Libre de químicos agresivos, conservantes y procesos
                industriales. Bienestar Artesanal te invita a reconectarte con
                la naturaleza a través de fórmulas puras y efectivas.
              </p>
              <Button variant="success" href="/productos">
                Ver catálogo completo
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 💚 PRODUCTOS DESTACADOS */}
      <section className="py-5">
        <Container>
          <h3 className="text-center text-success fw-bold mb-4">
            🌸 Productos Destacados
          </h3>
          <Row className="g-4">
            {[
              {
                nombre: "Gotas Cola de Caballo",
                precio: 2500,
                imagen: "/src/assets/gota1.png",
              },
              {
                nombre: "Gotas Digestivas",
                precio: 2200,
                imagen: "/src/assets/gota1.png",
              },
              {
                nombre: "Gotas Nerviol",
                precio: 2700,
                imagen: "/src/assets/gota1.png",
              },
            ].map((prod, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <Card className="shadow-sm border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={prod.imagen}
                    alt={prod.nombre}
                    style={{
                      height: "220px",
                      objectFit: "contain",
                      padding: "1rem",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-semibold">
                      {prod.nombre}
                    </Card.Title>
                    <Card.Text className="text-success fw-bold fs-5">
                      ${prod.precio.toLocaleString("es-AR")}
                    </Card.Text>
                    <Button
                      variant="outline-success"
                      href={`/productos/${i}`}
                      className="fw-semibold"
                    >
                      Ver más
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 💥 OFERTAS ESPECIALES */}
      <section className="bg-success bg-opacity-10 py-5 border-top">
        <Container>
          <h3 className="text-center text-success fw-bold mb-4">
            💥 Ofertas Especiales
          </h3>
          <Row className="g-4">
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow border-0">
                <Card.Body className="text-center">
                  <h5 className="fw-bold text-success">Pack Detox</h5>
                  <p className="text-muted">
                    Gotas Digestivas + Cola de Caballo con 10% OFF
                  </p>
                  <h4 className="fw-bold text-dark">$4.200</h4>
                  <Button variant="success">Comprar Ahora</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow border-0">
                <Card.Body className="text-center">
                  <h5 className="fw-bold text-success">Pack Relax</h5>
                  <p className="text-muted">
                    Gotas Nerviol + Moringa con 15% OFF
                  </p>
                  <h4 className="fw-bold text-dark">$4.300</h4>
                  <Button variant="success">Comprar Ahora</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow border-0">
                <Card.Body className="text-center">
                  <h5 className="fw-bold text-success">Combo Vitalidad</h5>
                  <p className="text-muted">
                    3 frascos surtidos a elección - 20% OFF
                  </p>
                  <h4 className="fw-bold text-dark">$5.900</h4>
                  <Button variant="success">Comprar Ahora</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🌿 LLAMADO A LA ACCIÓN FINAL */}
      <section className="bg-success text-white text-center py-5 mt-4">
        <Container>
          <h2 className="fw-bold mb-3">Cuidá tu cuerpo de forma natural 🌿</h2>
          <p className="mb-4">
            Sumate a la comunidad de Bienestar Artesanal y redescubrí el poder
            de lo natural. Productos elaborados con dedicación y respeto por la
            tierra.
          </p>
          <Button variant="light" size="lg" href="/productos">
            Ir a la Tienda 🛒
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Inicio;
