import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";

function FormularioAdmin() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Simulamos carga del producto
    Swal.fire({
      title: "✅ Producto cargado",
      text: "El producto se agregó correctamente al inventario.",
      icon: "success",
      confirmButtonColor: "#198754", // verde Bootstrap
      confirmButtonText: "Aceptar",
      timer: 2000,
      timerProgressBar: true,
    });

    // acá podrías limpiar el formulario si querés:
    e.target.reset();
  };

  return (
    <Container className="my-4">
      <h3 className="text-center text-success mb-4">Panel de Administración</h3>

      <Form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm bg-light">
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label className="fw-semibold">Nombre del producto</Form.Label>
          <Form.Control type="text" placeholder="Ej: Gotas Cola de Caballo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label className="fw-semibold">Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escribí una breve descripción del producto"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label className="fw-semibold">Precio</Form.Label>
          <Form.Control type="number" placeholder="Ej: 2500" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCantidad">
          <Form.Label className="fw-semibold">Cantidad</Form.Label>
          <Form.Control type="number" placeholder="Ej: 10" />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            Cargar producto
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormularioAdmin;
