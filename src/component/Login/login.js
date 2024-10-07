import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo192.jpg';
import Button from 'react-bootstrap/Button';
import './login.scss' 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login(_props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // Estado para almacenar el email
  const [password, setPassword] = useState(''); // Estado para la contraseña

  // Función para elegir el tipo de usuario y redirigir según el correo
  const asignarPanelDeUsuario = (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto

    // Verificar si el correo termina en @galileo.edu o @gmail.com
    if (email.endsWith('@galileo.edu')) {
      navigate('/main-menu'); // Navegar al panel del administrador
    } else if (email.endsWith('@gmail.com')) {
      navigate('/buscar-orden'); // Navegar al panel del estudiante
    } else {
      alert('Correo no válido. Use un correo de @galileo.edu o @gmail.com');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <Form className="text-center p-4 login-form" onSubmit={asignarPanelDeUsuario}>
        <div className="mb-4">
          <Image src={Logo} rounded className="login-logo" />
        </div>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Ingrese su Usuario</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingrese su correo" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Actualizar el estado del email
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupPassword">
          <Form.Label>Ingrese su Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // Actualizar el estado de la contraseña
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;