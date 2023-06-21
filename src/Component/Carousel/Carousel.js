// import React, { useState } from 'react';
// import './Carousel.css';

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//   };

//   const goToPreviousSlide = () => {
//     const prevIndex = (currentIndex + images.length - 1) % images.length;
//     setCurrentIndex(prevIndex);
//   };

//   return (
//     <div className='CarouselWrapper container'>
//       <div className="Carousel">
//         <button onClick={goToPreviousSlide}>&lt;</button>
//         <img className="Carouselslide" src={images[currentIndex]} alt="Carousel Slide" />
//         <img className="Carouselthumb" src={images[currentIndex]} alt="Carousel Slide" />
//         <button onClick={goToNextSlide}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
