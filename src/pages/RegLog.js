import React from "react";
import fb from "../images/fb.png";
import tw from "../images/tw.png";
import gp from "../images/gp.png";

const RegLog = () => {
  const login = () => {
    document.getElementById("login").style.left = "50px";
    document.getElementById("register").style.left = "450px";
    document.getElementById("btn").style.left = "0";
  };
  const register = () => {
    document.getElementById("login").style.left = "-400px";
    document.getElementById("register").style.left = "50px";
    document.getElementById("btn").style.left = "110px";
    document.getElementById("btn").style.width = "120px";
  };

  return (
    <div className="bg-photo-log">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={login}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={register}>
            Register
          </button>
        </div>
        <div className="social-icons">
          <img src={fb} alt="facebook" />
          <img src={tw} alt="twitter" />
          <img src={gp} alt="gp" />
        </div>
        <form id="login" action="" className="form-input">
          <input
            type="text"
            className="input-field"
            placeholder="User Id"
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="chech-box" />
          <span>Remember Password</span>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
        <form id="register" action="" className="form-input">
          <input
            type="text"
            className="input-field"
            placeholder="User Id"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="chech-box" />
          <span>I agree to the terms & conditions</span>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegLog;
