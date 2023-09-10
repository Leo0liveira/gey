import React from 'react';
import ScrollComponent from '../components/ScrollComponent';
import '../global.css';
import giftList from '../components/giftData'; // Importe a lista de presentes

function Gifts({ weddingImage }) {
  return (
    <div className="page">
      <div className="image-container">
        <img src={weddingImage} alt="Imagem do casamento" className="slide-in" />
      </div>
      <div className="content-container">
        <ScrollComponent>
          <ul className="gift-list">
            {giftList.map((gift) => (
              <li key={gift.id} className="gift-item">
                <h3 className="gift-name">{gift.name}</h3>
                <p className="gift-description" dangerouslySetInnerHTML={{ __html: gift.description }} />
              </li>
            ))}
          </ul>
        </ScrollComponent>
      </div>
    </div>
  );
}

export default Gifts;
