// ContactCard.js
import React from 'react';
import './ContactCard.css'; // Você pode criar um arquivo CSS para estilos específicos deste componente

function ContactCard() {
  return (
    <div className="contact-card">
      <h2>Entre em Contato</h2>
      <p>Telefone: (67) 99999-9999</p>
      {/* Outras informações de contato, se necessário */}
    </div>
  );
}

export default ContactCard;
