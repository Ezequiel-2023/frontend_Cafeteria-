import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/login';
import MainMenu from './component/pages/StudentPanel/MainMenu/MainMenu';
import SearchOrderNumber from './component/pages/AdminPanel/buscarOrdenes/SearchOrderNumber';
import OrdenesProceso from './component/pages/AdminPanel/ordenesEnProceso/OrdenesProceso';
import EditarUsuario from './component/pages/AdminPanel/editarUsuario/EditarUsuario';
import AgregarUsuario from './component/pages/AdminPanel/agregarUsuario/AgregarUsuario';
import ActualizarCafeteria from './component/pages/AdminPanel/actiualizarCafeteria/ActualizarCafeteria';
import ActualizarCategoria from './component/pages/AdminPanel/actualizarCategoria/ActualizarCategoria';
import ActualizarMenu from './component/pages/AdminPanel/actualizarMenu/ActualizarMenu';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.getElementById('minimize-button').addEventListener('click', () => {
      window.electron.minimize();
    });

    document.getElementById('close-button').addEventListener('click', () => {
      window.electron.close();
    });
  }, []);
  return (
    <Router>
      <div className="title-bar">
         <button id="minimize-button">_</button>
         <button id="close-button">X</button>
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route> 
          <Route path="/main-menu" element={<MainMenu></MainMenu>}></Route>
          <Route path='/buscar-orden' element={<SearchOrderNumber></SearchOrderNumber>}></Route>
          <Route path='/ordenes-proceso' element={<OrdenesProceso></OrdenesProceso>}></Route>
          <Route path='/editar-usuario' element={<EditarUsuario></EditarUsuario>}></Route>
          <Route path='/agregar-usuario' element={<AgregarUsuario></AgregarUsuario>}></Route>
          <Route path='/actualizar-cafeteria' element={<ActualizarCafeteria></ActualizarCafeteria>}></Route>
          <Route path='/actualizar-categoria' element={<ActualizarCategoria></ActualizarCategoria>}></Route>
          <Route path='/actualizar-menu' element={<ActualizarMenu></ActualizarMenu>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
