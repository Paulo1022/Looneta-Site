import './App.css';
import Home from './pages/home/home';
import Integrantes from './pages/integrantes/integrantes';
import Contato from './pages/contato/contato';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/integrantes' element={<Integrantes />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
