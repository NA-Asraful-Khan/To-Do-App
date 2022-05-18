import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Componantes/Login/Login';
import Home from './Componantes/Home/Home';
import Register from './Componantes/Login/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      

      <ToastContainer />
    </div>
  );
}

export default App;
