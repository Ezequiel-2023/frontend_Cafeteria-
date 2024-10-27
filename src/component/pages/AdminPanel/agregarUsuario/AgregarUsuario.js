import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './agregarUsuario.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IconoUsuario from '../../../../assets/img/icono_usuario.png'
import { faHome, faSearch, faUserEdit, faUserPlus, faBuilding, faTag, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <Image src={IconoUsuario} rounded className="login-logo" />
          </div>
            <Form>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese el  correo</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                       correo segun rol del usuario 
                      </Form.Text>
              </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraeña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Verificar Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                  <option> seleccione un rol</option>
                  <option value="1">Administrador</option>
                  <option value="2">Empleado</option>
                  <option value="3">Estuddiante</option>
                </Form.Select>
              <Button variant="primary" type="submit">
               Agregar Usuario 
              </Button>
             </Form>
          </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarUsuario;