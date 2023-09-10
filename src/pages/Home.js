// src/pages/Home.js
import React from 'react';
import '../global.css';

function Home({ weddingImage }) {
  return (
    <div className="page">
      <div className="image-container">
        <img src={weddingImage} alt="Imagem do casamento" className="slide-in" />
      </div>
      <div className="content-container">
        {/* Conteúdo da página */}
        <h1>Página Inicial</h1>
        <p>Bem-vindo ao nosso site de casamento!</p>
        {/* Outro conteúdo da página */}
      </div>
    </div>
  );
}

export default Home;
