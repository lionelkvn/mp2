import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './CarouselSlider.css';

const CarouselSlider = ({ items }) => {
  return (
    <Carousel className="main_slider">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;