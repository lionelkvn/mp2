import React from 'react';
import './Service.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build beautiful and responsive websites tailored to your needs.',
      imageUrl: './img1.jpg'
    },
    {
      title: 'Graphic Design',
      description: 'Our creative designers can bring your ideas to life with stunning visuals.',
      imageUrl: './img2.jpg'
    },
    {
      title: 'Graphic Design',
      description: 'Our creative designers can bring your ideas to life with stunning visuals.',
      imageUrl: './img3.jpg'
    },
    // Add more service objects as needed
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-card-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
