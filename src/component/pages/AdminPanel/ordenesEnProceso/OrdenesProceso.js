import { Container, Row, Col,  } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './ordenesProceso.scss'

function OrdenesProceso() {
  return (
    <Container fluid className="main-container">
      <Row>
        {/* Barra de navegación vertical */}
        <Col xs={3} className="nav-column">
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to="/ordenes-proceso">Órdenes en Proceso</Nav.Link>
            <Nav.Link as={Link} to="/buscar-orden">Buscar Orden</Nav.Link>
            <Nav.Link as={Link} to="/editar-usuario">Editar Usuario</Nav.Link>
            <Nav.Link as={Link} to="/agregar-usuario">Agregar Usuario</Nav.Link>
            <Nav.Link as={Link} to="/actualizar-cafeteria">Actualizar Información Cafetería</Nav.Link>
            <Nav.Link as={Link} to="/actualizar-categoria">Actualizar Categoría</Nav.Link>
            <Nav.Link as={Link} to="/actualizar-menu">Actualizar Menú</Nav.Link>
          </Nav>
        </Col>
        {/* aqui enpieza lo que esta fuera de la navegacion*/}
        <Col xs={9} className="content-column">
          <div>
            <h1>hola desde ver ordenes en proceso</h1>
          </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default OrdenesProceso;
