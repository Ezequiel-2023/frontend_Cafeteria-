import React from 'react';
import './Card.css'; 

const Card = ({ id, description, price, image }) => {
    return (
        <div className="card">
            <img src={image} alt={`Menu ${id}`} className="card-image" />
            <div className="card-content">
                <h3>Menu # {id}</h3>
                <p>{description}</p>
                <p><strong>Precio:</strong> {price}</p>
                <button className="add-button">Agregar</button>
            </div>
        </div>
    );
};

export default Card;
