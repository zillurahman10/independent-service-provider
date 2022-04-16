import React from 'react';
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='container mx-3'>
            <div className='single-card m-5 border'>
                <img className='card-image mb-2' src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Price : $ {price}</h4>
            </div>
        </div>
    );
};

export default ServicesCard;