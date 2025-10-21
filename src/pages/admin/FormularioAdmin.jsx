import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function FormularioAdmin({ cargarProducto, productoEditar }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Si hay un producto a editar, precargar sus datos en el formulario
  useEffect(() => {
    if (productoEditar) {
      setValue("nombre", productoEditar.nombre);
      setValue("descripcion", productoEditar.descripcion);
      setValue("precio", productoEditar.precio);
      setValue("cantidad", productoEditar.cantidad);
    } else {
    }
  }, [productoEditar, setValue, reset]);

  const onSubmit = (data) => {
    cargarProducto(data);

    Swal.fire({
      title: productoEditar ? "✏️ Producto editado" : "✅ Producto guardado",
      text: productoEditar
        ? "Los cambios se guardaron correctamente."
        : "El producto se cargó correctamente.",
      icon: "success",
      confirmButtonColor: "#198754",
    });

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-3 border rounded shadow-sm bg-light"
      noValidate
    >
      <Form.Group className="mb-3" controlId="formNombreProducto">
        <Form.Label className="fw-semibold">Nombre del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Gotas Cola de Caballo"
          {...register("nombre", {
            required: "El nombre del producto es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Debe tener como máximo 30 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescripcion">
        <Form.Label className="fw-semibold">Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escribí una breve descripción del producto"
          {...register("descripcion", {
            required: "La descripción es obligatoria",
            minLength: {
              value: 5,
              message: "Debe tener al menos 5 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPrecio">
        <Form.Label className="fw-semibold">Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 2500"
          {...register("precio", {
            required: "El precio es obligatorio",
            min: { value: 50, message: "El precio mínimo es $50" },
          })}
        />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCantidad">
        <Form.Label className="fw-semibold">Cantidad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 10"
          {...register("cantidad", {
            required: "La cantidad es obligatoria",
            min: { value: 1, message: "Debe haber al menos 1 unidad" },
          })}
        />
        <Form.Text className="text-danger">{errors.cantidad?.message}</Form.Text>
      </Form.Group>

      <div className="text-center">
        <Button variant="success" type="submit">
          {productoEditar ? "Guardar cambios" : "Cargar producto"}
        </Button>
      </div>
    </form>
  );
}

export default FormularioAdmin;
