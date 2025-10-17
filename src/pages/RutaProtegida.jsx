import { Navigate, Outlet } from "react-router";

function RutaProtegida({ usuarioLogueado}) {

    if (!usuarioLogueado) {
      
      return <Navigate to={"/"} />
    }

  return <Outlet />
}

export default RutaProtegida;