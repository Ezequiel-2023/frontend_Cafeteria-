import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Logo from '../../img/logo192.jpg';
import Button from 'react-bootstrap/Button';
import './login.scss' 
import { useNavigate } from 'react-router-dom';

function Login(_props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto
    navigate('/main-menu'); // Navegar al componente MainMenu
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <Form className="text-center p-4 login-form" onSubmit={handleSubmit}> {/* Agregar onSubmit aquí */}
        <div className="mb-4">
          <Image src={Logo} rounded className="login-logo" />
        </div>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Ingrese su Usuario</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupPassword">
          <Form.Label>Ingrese su Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;