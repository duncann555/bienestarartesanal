import Carousel from "react-bootstrap/Carousel";
import "../styles/carrusel.css";
import img1 from "../assets/13.png";
import img2 from "../assets/11.png";
import img3 from "../assets/12.png";

function Carrusel() {
  return (
    <Carousel fade className="carrusel-bienestar">
      {/* 🌿 Imagen 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-img"
          src={img1}
          alt="Productos naturales artesanales"
        />
        <Carousel.Caption>
          <h3>Bienestar Artesanal</h3>
          <p>
            Cuidá tu cuerpo con productos elaborados a mano, libres de químicos y 
            llenos de ingredientes naturales que nutren tu piel y tu bienestar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 🌸 Imagen 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-img"
          src={img2}
          alt="Cosmética natural y sustentable"
        />
        <Carousel.Caption>
          <h3>Cosmética Natural</h3>
          <p>
            Jabones, cremas y aceites esenciales inspirados en la naturaleza. 
            Cada producto combina pureza, aroma y conciencia ambiental.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 🌾 Imagen 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel-img"
          src={img3}
          alt="Aromas y bienestar natural"
        />
        <Carousel.Caption>
          <h3>Armonía y Bienestar</h3>
          <p>
            Descubrí el equilibrio entre cuerpo y mente con nuestras mezclas 
            artesanales: suaves aromas, texturas naturales y amor por la Tierra.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
