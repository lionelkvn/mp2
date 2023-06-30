import './App.css';
import React from 'react';
import "@fontsource/poppins";
import { Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Homepage from './pages/Homepage';



function Apps() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </>
  );
}

export default Apps;