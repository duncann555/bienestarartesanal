import ElementoProducto from "../components/ElementoProducto";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/productos.css";

function Productos() {
  const productos = [
    { nombre: "Producto 1" },
    { nombre: "Producto 2" },
    { nombre: "Producto 3" },
    { nombre: "Producto 4" },
    { nombre: "Producto 1" },
    { nombre: "Producto 2" },
    { nombre: "Producto 3" },
    { nombre: "Producto 4" },
    { nombre: "Producto 1" },
    { nombre: "Producto 2" },
    { nombre: "Producto 3" },
    { nombre: "Producto 4" },
    { nombre: "Producto 1" },
    { nombre: "Producto 2" },
    { nombre: "Producto 3" },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 text-success fw-bold">
        Nuestros Productos
      </h1>
      <Row className="g-4 justify-content-center">
        {productos.map((prod, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <ElementoProducto producto={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
