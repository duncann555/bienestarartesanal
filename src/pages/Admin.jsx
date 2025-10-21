import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import FormularioAdmin from "../pages/admin/FormularioAdmin";
import ListaAdmin from "../pages/admin/ListaAdmin";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Admin() {
  const [productos, setProductos] = useState([]);
  const [editarProducto, setEditarProducto] = useState(null); // ✅ correcto
  const [showModal, setShowModal] = useState(false); // controla el modal

  // Cargar productos del localStorage al montar
  useEffect(() => {
    const guardados = localStorage.getItem("productos");
    if (guardados) {
      setProductos(JSON.parse(guardados));
    }
  }, []);

  // Guardar productos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  // Cargar un nuevo producto
  const cargarProducto = (nuevoProducto) => {
    setProductos((prev) => [...prev, nuevoProducto]);
  };

  // Eliminar producto por índice
  const eliminarProducto = (indice) => {
    const actualizados = productos.filter((_, i) => i !== indice);
    setProductos(actualizados);
  };

  // Abrir modal con producto a editar
  const abrirModalEdicion = (indice) => {
    setEditarProducto({ ...productos[indice], index: indice });
    setShowModal(true);
  };

  // Guardar cambios desde el modal
  const guardarEdicion = (productoActualizado) => {
    if (!editarProducto) return; // ✅ evita el error si está en null

    const actualizados = [...productos];
    actualizados[editarProducto.index] = productoActualizado;
    setProductos(actualizados);
    setShowModal(false);
    setEditarProducto(null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center text-success mb-4">Panel de Administración</h2>

      {/* Formulario principal para agregar productos */}
      <FormularioAdmin cargarProducto={cargarProducto} />

      <hr />

      {/* Lista con botones de acción */}
      <ListaAdmin
        productos={productos}
        eliminarProducto={eliminarProducto}
        editarProducto={abrirModalEdicion} // ✅ función correcta
      />

      {/* Modal para edición */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editarProducto && (
            <FormularioAdmin
              cargarProducto={guardarEdicion} // ✅ usa la función de guardar edición
              productoEditar={editarProducto} // ✅ pasa el producto al formulario
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Admin;
