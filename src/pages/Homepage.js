import './Homepage.css';
import React from 'react';
import "@fontsource/poppins";
import Navbar from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import About from '../Component/About/About';
import Service from '../Component/Services/Service';
import Portfolio from '../Component/Portfolio/Portfolio';
import Contact from '../Component/Contact/Contact';

function Homepage() {
  return (
    <>
      <Navbar />
      <Home /> 
      <About />
      <Service />
      {/* <CarouselSlider /> */}
      <Portfolio />
      <Contact />
    </>
  );
}

export default Homepage;
