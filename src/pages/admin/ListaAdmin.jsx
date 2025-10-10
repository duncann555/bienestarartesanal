import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import Swal from "sweetalert2";


function ListaProductosAdmin() {
  const [productos, setProductos] = useState([
    { nombre: "Gotas Cola de Caballo", precio: 2500, cantidad: 12 },
    { nombre: "Gotas Digestivas", precio: 2200, cantidad: 8 },
    { nombre: "Gotas Nerviol", precio: 2700, cantidad: 15 },
    { nombre: "Gotas Moringa", precio: 2400, cantidad: 10 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [productoEdit, setProductoEdit] = useState(null);
  const [indexEdit, setIndexEdit] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (producto, index) => {
    setProductoEdit({ ...producto });
    setIndexEdit(index);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoEdit((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (indexEdit == null || !productoEdit) return;
    const nuevos = [...productos];

    const precioNum = Number(productoEdit.precio);
    const cantidadNum = Number(productoEdit.cantidad);

    nuevos[indexEdit] = {
      ...nuevos[indexEdit],
      nombre: (productoEdit.nombre || "").trim() || "Sin nombre",
      precio: Number.isFinite(precioNum) ? precioNum : 0,
      cantidad: Number.isFinite(cantidadNum) ? cantidadNum : 0,
    };

    setProductos(nuevos);
    setShowModal(false);
  };

  const eliminarProducto = (index) => {
    setProductos((prev) => prev.filter((_, i) => i !== index));
  };

  const verMas = (p) => {
    alert(
      `🧴 ${p?.nombre}\n💲 Precio: $${p?.precio}\n📦 Stock: ${p?.cantidad} unidades.`
    );
  };

  return (
    <Container className="my-5">
      <h3 className="text-center text-success mb-4">Productos cargados</h3>

      <ListGroup className="p-3 border rounded shadow-sm bg-light">
        {/* Header visible solo en pantallas medianas o grandes */}
        <ListGroup.Item className="fw-semibold bg-success text-white d-none d-md-flex text-center">
          <Col md={4}>Producto</Col>
          <Col md={2}>Precio</Col>
          <Col md={2}>Stock</Col>
          <Col md={4}>Acciones</Col>
        </ListGroup.Item>

        {/* Filas de productos */}
        {productos.map((prod, index) => (
          <ListGroup.Item
            key={index}
            className="border-0 border-bottom bg-light py-3"
          >
            <Row className="align-items-center text-center">
              <Col xs={12} md={4} className="mb-2 mb-md-0">
                <strong>{prod.nombre}</strong>
              </Col>

              <Col xs={6} md={2}>
                <span className="text-muted">
                  ${Number(prod.precio).toLocaleString("es-AR")}
                </span>
              </Col>

              <Col xs={6} md={2}>
                <span className="badge bg-success rounded-pill px-3 py-2">
                  Stock {prod.cantidad}
                </span>
              </Col>

              <Col xs={12} md={4} className="d-flex justify-content-center gap-2 mt-2 mt-md-0">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleShow(prod, index)}
                >
                  ✏️ Editar
                </Button>
                <Button variant="primary" size="sm" onClick={() => verMas(prod)}>
                  👁️ Ver más
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarProducto(index)}
                >
                  🗑️ Eliminar
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}

        {productos.length === 0 && (
          <div className="text-center text-muted py-3">
            No hay productos cargados.
          </div>
        )}
      </ListGroup>

      {/* Modal de edición */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-success text-white">
          <Modal.Title>✏️ Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoEdit && (
            <Form>
              <Form.Group className="mb-3" controlId="nombreProducto">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={productoEdit.nombre ?? ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="precioProducto">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  value={productoEdit.precio ?? ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cantidadProducto">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  name="cantidad"
                  value={productoEdit.cantidad ?? ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleSave}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListaProductosAdmin;