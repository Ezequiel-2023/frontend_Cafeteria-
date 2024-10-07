import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/login';
import MainMenu from './component/pages/StudentPanel/MainMenu/MainMenu';
import SearchOrderNumber from './component/pages/AdminPanel/buscarOrdenes/SearchOrderNumber';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route> 
          <Route path="/main-menu" element={<MainMenu></MainMenu>}></Route>
          <Route path='/buscar-orden' element={<SearchOrderNumber></SearchOrderNumber>}></Route></Routes>
      </div>
    </Router>
  );
}

export default App;
