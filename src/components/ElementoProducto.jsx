import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgGota from "../assets/gota1.png";

function ElementoProducto() {
  return (
    <Card style={{ width: '18rem' }} className='my-4'>
      <Card.Img variant="top" src={imgGota} />
      <Card.Body>
        <Card.Title>Cola de Caballo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  );
}

export default ElementoProducto;