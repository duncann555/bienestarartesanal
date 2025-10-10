import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import "../styles/error404.css"; // opcional, si querés personalizar colores

const Error404 = () => {

  return (
    <Container className="text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <Image
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 not found"
        fluid
        className="mb-4 error-img"
      />
      <h1 className="display-4 fw-bold text-primary">¡Oops!</h1>
      <h2 className="mb-3 text-secondary">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Parece que te perdiste en el ciberespacio 🚀.  
        La página que buscas no existe o fue movida.
      </p>
      <Button variant="primary" size="lg" onClick={() => navigate("/")}>
        Volver al inicio
      </Button>
    </Container>
  );
};

export default Error404;
