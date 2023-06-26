import './App.css';
import React from 'react';
import "@fontsource/poppins";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Service from './Component/Services/Service';
function Apps() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default Apps;