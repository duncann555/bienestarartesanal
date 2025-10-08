import Container from 'react-bootstrap/Container'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Carrusel from './components/Carrusel.jsx'
import CardProducto from './components/ElementoProducto.jsx'
import ListaProductos from './components/ListaProductos.jsx'
import Admnistrador from './pages/Admnistrador.jsx'

function App() {
  return (
    <>
      <Menu />
      <Container className="my-5">
        <Admnistrador/>
      </Container>
      <Footer />
    </>
  )
}

export default App
