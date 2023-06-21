import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-card__image" />
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
};

export default ServiceCard;