import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './SearchOrderNumber.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SearchOrderNumber() {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4000/orden/${orderNumber}`);
      setOrderData(response.data);
    } catch (error) {
      console.error('Error al buscar la orden', error);
    }
  };

  return (
    <Container fluid className="main-container">
      <Row>
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
        <Col xs={9} className="content-column">
          <div className="search-section">
            <Form className="search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Buscar Orden"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
              <Button variant="primary" type="submit">Buscar</Button>
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
                {orderData ? (
                  <tr>
                    <td>{orderData.numeroOrden}</td>
                    <td>{orderData.nombreCLiente}</td>
                    <td>{orderData.fecha}</td>
                    <td>{orderData.hora}</td>
                    <td>
                      <Button variant="success" size="sm">Comenzar a Preparar</Button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="5">No hay datos de la orden</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchOrderNumber;
   


