import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './SearchOrderNumber.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { faHome, faSearch, faUserEdit, faUserPlus, faBuilding, faTag, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        {/* Barra de navegación vertical */}
        <Col xs={3} className="nav-column">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to="/ordenes-proceso">
              <FontAwesomeIcon icon={faHome} className="icon" /> Órdenes en Proceso
            </Nav.Link>
            <Nav.Link as={Link} to="/buscar-orden">
              <FontAwesomeIcon icon={faSearch} className="icon" /> Buscar Orden
            </Nav.Link>
            <Nav.Link as={Link} to="/editar-usuario">
              <FontAwesomeIcon icon={faUserEdit} className="icon" /> Editar Usuario
            </Nav.Link>
            <Nav.Link as={Link} to="/agregar-usuario">
              <FontAwesomeIcon icon={faUserPlus} className="icon" /> Agregar Usuario
            </Nav.Link>
            <Nav.Link as={Link} to="/actualizar-cafeteria">
              <FontAwesomeIcon icon={faBuilding} className="icon" /> Actualizar Información Cafetería
            </Nav.Link>
            <Nav.Link as={Link} to="/actualizar-categoria">
              <FontAwesomeIcon icon={faTag} className="icon" /> Actualizar Categoría
            </Nav.Link>
            <Nav.Link as={Link} to="/actualizar-menu">
              <FontAwesomeIcon icon={faUtensils} className="icon" /> Actualizar Menú
            </Nav.Link>
          </Nav>
        </Col>
        {/* aquí empieza lo que está fuera de la navegación */}
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
   


