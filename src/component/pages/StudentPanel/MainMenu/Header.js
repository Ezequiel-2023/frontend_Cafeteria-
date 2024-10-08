import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import shoppingCart from '../../../../assets/Shopping_cart.png';
import logout from '../../../../assets/logout.png';
function Header() {
    return (
        <header>
          <Navbar bg="white" expand="lg">
            <Navbar.Brand>
              <Button 
                variant="outline-danger" 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    outline: 'none', 
                    boxShadow: 'none',
                    marginLeft: '20px' 
                  }}
              >
                <img src={logout} alt="Logout" style={{ width: '65px', height: '65px'}} />
                Salir
              </Button>
            </Navbar.Brand>
            <Nav className="ml-auto" style={{ marginLeft: 'auto' }}> 
              <Button 
                variant="outline-primary"  
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  outline: 'none', 
                  boxShadow: 'none',
                  marginRight: '20px'
                }}
                onFocus={(e) => e.target.blur()} 
              >
                <img src={shoppingCart} alt="Carrito" style={{ width: '65px', height: '65px' }} /> 
                <span>Ver carrito</span>
              </Button>
            </Nav>
          </Navbar>
          <h2 className="text-center mt-3">Menú</h2>
        </header>
      );
    }

export default Header;
