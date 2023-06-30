import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Login } from '../Component/Login/Login';
// import { Register } from '../Component/Register/Register';

const Signin = () => {
  return (
    <div>
        <Navbar />
        <Login />
        {/* <Register /> */}
    </div>
  )
}

export default Signin;