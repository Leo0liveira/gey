import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gifts from './pages/Gifts';
import Contact from './pages/Contact';
import weddingImage from './img.png';
import './global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Sobre nós</Link>
            </li>
            <li>
              <Link to="/gifts">Lista de Presente</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home weddingImage={weddingImage} />} />
        <Route path="/gifts" element={<Gifts weddingImage={weddingImage} />} />
        <Route path="/contact" element={<Contact weddingImage={weddingImage} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
