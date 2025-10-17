import Menu from "./pages/shared/Menu.jsx";
import Footer from "./pages/shared/Footer.jsx";
import Container from "react-bootstrap/Container";

import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import Inicio from "./pages/Inicio.jsx";
import Productos from "./pages/Productos.jsx";
import Admin from "./pages/Admin.jsx";
import Contacto from "./pages/Contacto.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Error404 from "./pages/Error404.jsx";
import RutaProtegida from "./pages/RutaProtegida.jsx";

function App() {
  const sesionUsuario = JSON.parse(sessionStorage.getItem('usuarioKey')) || false
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(()=> {
    sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogueado))
  },[usuarioLogueado])

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <Container className="my-5">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route
              path="/admin"
              element={
                <RutaProtegida usuarioLogueado={usuarioLogueado}>
                  <Admin />
                </RutaProtegida>
              }
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
