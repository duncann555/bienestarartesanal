import FormularioAdministrador from "../components/FormularioAdmin";
import ListaAdmin from "../components/ListaAdmin";

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
