import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/nosotros.css";


const SobreNosotros = () => {
  return (
    <>
      {/* 🌿 Sección principal */}
      <section className="bg-light py-5 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="/src/assets/natural-team.jpg"
                alt="Equipo Bienestar Artesanal"
                className="img-fluid rounded shadow-sm"
              />
            </Col>

            <Col md={6}>
              <h2 className="text-success fw-bold mb-3">
                Nuestra Esencia 🌿
              </h2>
              <p className="text-muted">
                En <strong>Bienestar Artesanal</strong> creemos en el poder de la
                naturaleza para equilibrar cuerpo, mente y espíritu.  
                Elaboramos productos naturales con ingredientes puros, libres de
                conservantes y químicos agresivos, inspirados en recetas
                tradicionales de herbolaria y medicina natural.
              </p>
              <p className="text-muted">
                Nuestra misión es ofrecer alternativas saludables, sostenibles y
                accesibles para el bienestar diario.  
                Cada producto es creado artesanalmente con pasión, respeto y
                compromiso hacia vos y hacia el planeta. 🌎
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 💚 Sección de valores */}
      <section className="py-5">
        <Container>
          <h3 className="text-center text-success fw-bold mb-5">
            Nuestros Valores Fundamentales
          </h3>

          <Row className="g-4 text-center">
            <Col xs={12} md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h5 className="text-success fw-bold mb-3">🌱 Naturalidad</h5>
                  <p className="text-muted">
                    Usamos solo ingredientes naturales y procesos artesanales.
                    Cada gota está hecha con dedicación y respeto por la tierra.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h5 className="text-success fw-bold mb-3">💧 Transparencia</h5>
                  <p className="text-muted">
                    Queremos que sepas exactamente qué estás usando. Sin
                    aditivos ocultos, sin promesas falsas: solo bienestar real.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <h5 className="text-success fw-bold mb-3">🌎 Sustentabilidad</h5>
                  <p className="text-muted">
                    Cuidamos el planeta usando envases reciclables y promoviendo
                    un consumo consciente que respete la naturaleza.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🧴 Sección de proceso artesanal */}
      <section className="bg-success bg-opacity-10 py-5 border-top border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="text-success fw-bold mb-3">Elaboración Artesanal</h2>
              <p className="text-muted">
                Todos nuestros productos son elaborados a mano, en pequeños
                lotes, garantizando frescura y calidad.  
                Nos inspiramos en el equilibrio entre tradición y ciencia para
                desarrollar fórmulas efectivas, seguras y naturales.
              </p>
              <p className="text-muted">
                Cada frasco que llega a tus manos pasa por un proceso cuidadoso
                de selección, maceración y envasado con estándares de higiene y
                amor por lo que hacemos.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/src/assets/artesanal-proceso.jpg"
                alt="Proceso artesanal"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✉️ Sección de contacto */}
      <section className="py-5 text-center">
        <Container>
          <h3 className="text-success fw-bold mb-3">¿Querés saber más?</h3>
          <p className="text-muted mb-4">
            Escribinos para conocer más sobre nuestros productos, procesos o
            puntos de venta.  
            ¡Estamos felices de acompañarte en tu camino hacia una vida más
            natural!
          </p>
          <a href="/contacto" className="btn btn-success btn-lg">
            Contactanos 💌
          </a>
        </Container>
      </section>
    </>
  );
};

export default SobreNosotros;
