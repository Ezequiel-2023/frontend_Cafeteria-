import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo192.jpg';
import Button from 'react-bootstrap/Button';
import './login.scss'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login(_props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log('Enviando solicitud de login:', { username: email, password });
      const response = await axios.post('http://localhost:4000/auth/login', { username: email, password });
      const token = response.data.access_token;
      localStorage.setItem('token', token);

      if (email.endsWith('@galileo.edu')) {
        navigate('/main-menu');
      } else if (email.endsWith('@gmail.com')) {
        navigate('/buscar-orden');
      } else {
        toast.error('Correo no válido. Use un correo de @galileo.edu o @gmail.com', {
          autoClose: 2000 ,// cerrar la alerta
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      toast.error('Credenciales inválidas', { 
        autoClose: 2000 ,// cerrar la alerta
      });
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center vh-100">
      <Form className="text-center p-4 login-form" onSubmit={handleLogin}>
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
        <Form.Group className="mb-3" controlId="formGroupPassword">
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
      <ToastContainer />
    </div>
  );
}

export default Login;
