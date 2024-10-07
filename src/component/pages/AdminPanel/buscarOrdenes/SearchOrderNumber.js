import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './SearchOrderNumber.scss'

function SearchOrderNumber() {
  return (
    <Container fluid className="main-container">
      <Row>
        {/* Barra de navegación vertical */}
        <Col xs={3} className="nav-column">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link eventKey="link-1">Órdenes en Proceso</Nav.Link>
            <Nav.Link eventKey="link-2">Buscar Orden</Nav.Link>
            <Nav.Link eventKey="link-3">Editar Usuario</Nav.Link>
            <Nav.Link eventKey="link-4">Agregar Usuario</Nav.Link>
            <Nav.Link eventKey="link-5">Actualizar Información Cafetería</Nav.Link>
            <Nav.Link eventKey="link-6">Actualizar Categoría</Nav.Link>
            <Nav.Link eventKey="link-7">Actualizar Menú</Nav.Link>
          </Nav>
        </Col>

        {/* Área principal con el buscador y la tabla */}
        <Col xs={9} className="content-column">
          <div className="search-section">
            <Form className="search-form">
              <Form.Control type="search" placeholder="Buscar Orden" />
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </Form>
          </div>

          <div className="table-section">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>No Orden</th>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Pagar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2896236</td>
                  <td>Pedro Picapiedra</td>
                  <td>15/12/2024</td>
                  <td>15:30</td>
                  <td>
                    <Button variant="success" size="sm">
                      Comenzar a Preparar
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchOrderNumber;
