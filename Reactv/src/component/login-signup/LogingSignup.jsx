import React, { useState } from "react";
import "./LoginSignup.css";

import Email from "../Assets/email.png";
import Person from "../Assets/person.png";
import Password from "../Assets/password.png";

const LogingSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>{action}</h1>
        </div>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input-group">
            <img src={Person} alt="" />
            <input
              id="login-email"
              type="text"
              placeholder="someone"
              required
            />
          </div>
        )}

        <div className="input-group">
          <img src={Email} alt="" />
          <input
            id="login-email"
            type="email"
            placeholder="someone@gmail.com"
            required
          />
        </div>
        <div className="input-group">
          <img src={Password} alt="" />
          <input
            id="login-email"
            type="password"
            placeholder="........"
            required
          />
        </div>
        {action==='SignUp'?<div></div>:<div className="forgetPassword">
          <h4>Forget Password <span><a href="">clickhere</a></span></h4>
        </div>}
        
        <div className="buttons">
          <button onClick={() => setAction("SignUp")}>SignUp</button>
          <button onClick={() => setAction("Login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LogingSignup;
