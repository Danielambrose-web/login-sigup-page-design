import React from "react";
import './LoginSignup.css'
import Email from "../Assets/email.png";
import Person from "../Assets/person.png";
import Password from "../Assets/password.png";

const LogingSignup = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Signup</h1>
        </div>
        <div className="input-group">
          <img src={Person} alt="" />
          <input id="login-email" type="text" placeholder="someone" required />
        </div>
        <div  className="input-group">
          <img src={Email} alt="" />
          <input
            id="login-email"
            type="email"
            placeholder="someone@gmail.com"
            required
          />
        </div>
        <div  className="input-group">
          <img src={Password} alt="" />
          <input
            id="login-email"
            type="password"
            placeholder="........"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default LogingSignup;
