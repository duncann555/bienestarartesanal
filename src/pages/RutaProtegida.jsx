import { useEffect } from "react";
import { useNavigate } from "react-router";

function RutaProtegida({ usuarioLogueado, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioLogueado) {
      navigate("/"); // 👈 redirige al inicio
    }
  }, [usuarioLogueado, navigate]);

  // si está logueado, renderiza el contenido (Admin)
  return usuarioLogueado ? children : null;
}

export default RutaProtegida;
