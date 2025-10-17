import FormularioAdministrador from "./admin/FormularioAdmin";
import ListaAdmin from "./admin/ListaAdmin";

const Admnistrador = () => {
  return (
    <>
      <h1 className="text-center mt-5">Administrador</h1>

      <FormularioAdministrador />
      <ListaAdmin />
    </>
  );
};

export default Admnistrador;
