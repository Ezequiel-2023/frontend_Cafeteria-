import './MainMenu.scss' 
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import menu1 from '../../../../assets/menuCafeteria/menu1.png';

function MainMenu() {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/desayuno">
        <Nav.Item>
          <Nav.Link href="/desayuno">Desayuno</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/almuerzo">Almuerzo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cena">Cena</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/snack">Snack</Nav.Link>
        </Nav.Item>
      </Nav>
      {}
      <Card style={{ width: '18rem', marginTop: '20px' }}>
        <Card.Img variant="top" src={menu1} />
        <Card.Body>
          <Card.Title>Desayuno Tradicional</Card.Title>
          <Card.Text>
            <p>Incluye Huevos estrellados</p>
            <p>Frijoles Platanos</p>
            <p>Acompañado con cafe o Jugo</p>
            <p>Precio Q.35.00</p>
          </Card.Text>
          <Button variant="primary">Agregar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MainMenu;

