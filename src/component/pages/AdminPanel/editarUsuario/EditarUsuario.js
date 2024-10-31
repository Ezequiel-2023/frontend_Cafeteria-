import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUserEdit, faUserPlus, faBuilding, faTag, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './editarUsuario.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IconoUsuario from '../../../../assets/img/icono_usuario.png';


function AgregarUsuario() {
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
          <div>
          <div className="rounded">
            <Image  src={IconoUsuario} rounded className="login-logo" />
          </div>
            <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese Su Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Nombre del Usuario" />
              </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Ingrese Contraeña Actual</Form.Label>
                  <Form.Control type="password" placeholder="ingrese contraseña actual" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Ingrese Nueva Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="nueva contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Validar Nueva Contraeña</Form.Label>
                  <Form.Control type="password" placeholder="repetir nueva contaseña" />
                </Form.Group>
              <Button variant="primary" type="submit">
               Actualizar Contaeña
              </Button>
             </Form>
          </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarUsuario;