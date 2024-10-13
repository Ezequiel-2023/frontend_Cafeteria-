import React from 'react';
import './Card.css'; 
import imageMap from './imageMap';

// Ajustamos las propiedades para reflejar el formato de la respuesta del endpoint
const Card = ({ idProducto, descripcion, precio, imagenProducto }) => {
    const productImage = imageMap[imagenProducto] || 'defaultImagePath'; // En caso de que no haya imagen, usar una imagen por defecto

    return (
        <div className="card">
            <img src={productImage} alt={`Menu ${idProducto}`} className="card-image" />
            <div className="card-content">
                <h3>Menu # {idProducto}</h3>
                <p>{descripcion}</p>
                <p><strong>Precio:</strong> Q{precio}</p>
                <button className="add-button">Agregar</button>
            </div>
        </div>
    );
};

export default Card;
