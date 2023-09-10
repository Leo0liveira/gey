import React from 'react';
import './ScrollComponent.css'; // Importe o arquivo CSS para estilos específicos deste componente

class ScrollComponent extends React.Component {
  render() {
    return (
      <div className="scroll-container">
        <h2>Lista de presentes</h2>
        {/* Conteúdo dentro do componente com rolagem */}
        {this.props.children}
      </div>
    );
  }
}

export default ScrollComponent;
