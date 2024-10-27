import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUserEdit, faUserPlus, faBuilding, faTag, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './ActualizarCafeteria.scss'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ActualizarCafeteria() {
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
        {/* Contenido principal */}
        <Col xs={9} className="content-column">
        <div className="rounded">
            <h1>Agregar Editar Menu</h1>
            <Form>
            <Form.Select aria-label="Default select example">
                  <option> seleccione una Categoria</option>
                  <option value="1">Desayuno</option>
                  <option value="2">Almuerzo</option>
                  <option value="3">Snak</option>
                  <option value="3">Bebidas</option>
                  <option value="3">Postres</option>
                  <option value="3">otros</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>precio</Form.Label>
                  <Form.Control type="text" placeholder="" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control type="text" placeholder="" />
               </Form.Group>
              <Button variant="primary" type="submit">
               Agregar/Actualizar
              </Button>
             </Form>
          </div>  
        </Col>
      </Row>
    </Container>
  );
}

export default ActualizarCafeteria;
