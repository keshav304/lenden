import React from "react";
import LoginBackground from "../../images/login.png";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <section className="register-container">
      <div className="register-form-container">
        <div className="register-image">
          <img
            src={LoginBackground}
            className="register-image"
            alt="Register background"
          />
        </div>
        <div className="register-form">
          <form className="register-form-container-div">
            <div className="register-form-heading">
              <img src={Logo} alt="Logo" />
              <p>LenDen</p>
            </div>

            <div className="register-form-input">
              <p>Register your account</p>
              <div className="register-form-input-div">
                <div>
                  <input type="email" className="register-form-input-box" required placeholder="Email address" />
                </div>
                <div>
                  <input type="password" className="register-form-input-box"  required placeholder="Password" />
                </div>
                <div>
                  <button className="register-button">Register</button>
                </div>
              </div>
            </div>
            <div className="register-extra-info">
              <p>Forgot Password ?</p>
              <p>
                Already have an account?{" "}
                <span >
                  <Link to="/login" className="login">Login Here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Register;
