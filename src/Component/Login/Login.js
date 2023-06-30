import "./Login.css";
import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form id="login">
        <label htmlFor="email">Enter your email:</label>
        <input
          value={email}
          type="email"
          placeholder="user@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Enter your password:</label>
        <input
          value={password}
          type="email"
          placeholder="*********"
          id="password"
          name="password"
        />
        <p> have no account yet? <a href="#">Click here</a> to register</p>
        <button>Log in</button>
        
      </form>
    </div>
  );
};
