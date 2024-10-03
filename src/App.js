import './App.scss';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './component/Login/login';
import MainMenu from './component/StudentPanel/studentPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main-menu" element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
