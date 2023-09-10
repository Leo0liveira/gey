// src/pages/Home.js (e outros componentes de página)
import React from 'react';
import ContactCard from '../components/ContactCard'; // Importe o componente ContactCard
import '../global.css';

function Contact({ weddingImage }) {
  return (
    <div className="page">
      <div className="image-container">
        <img src={weddingImage} alt="Imagem do casamento" />
      </div>
      <div className="content-container">
        <ContactCard /> {/* Renderize o componente ContactCard aqui */}
      </div>
    </div>
  );
}

export default Contact;
