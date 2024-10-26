import { Container, Row, Col, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './agregarUsuario.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IconoUsuario from '../../../../assets/img/icono_usuario.png'

function AgregarUsuario() {
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
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                  <option> seleccione un rol</option>
                  <option value="1">Administrador</option>
                  <option value="2">Empleado</option>
                  <option value="3">Estuddiante</option>
                </Form.Select>
              <Button variant="primary" type="submit">
               Submit
              </Button>
             </Form>
          </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarUsuario;