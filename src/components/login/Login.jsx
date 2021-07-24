import React from "react";
import LoginBackground from "../../images/login.png";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    // <div className="login-form-component">
    //   <div className="login-form-component-div">
    //     <div>
    //       <img
    //         src={LoginBackground}
    //         className="login-image"
    //         alt="Login background"
    //       />
    //     </div>
    //     <div>
    //       <form className="login-form-container">
    //         <div className="login-heading">
    //           <img src={Logo} alt="Logo" />
    //           <p>LENDEN</p>
    //         </div>
    //         <div className="login-form">
    //           <p>Sing into your account</p>
    //           <div>
    //             <div>
    //               <input type="email" required placeholder="Email address" />
    //             </div>
    //             <div>
    //               <input type="password" required placeholder="Password" />
    //             </div>
    //             <div>
    //               <button>Login</button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="login-extra-info">
    //           <p>Forgot Password ?</p>
    //           <p>
    //             Don't have an account ?'{" "}
    //             <span>
    //               <Link to="/register">Register Here</Link>
    //             </span>
    //           </p>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <section className="login-container">
      <div className="login-form-container">
        <div className="login-image">
          <img
            src={LoginBackground}
            className="login-image"
            alt="Login background"
          />
        </div>
        <div className="login-form">
          <form className="login-form-container-div">
            <div className="login-form-heading">
              <img src={Logo} alt="Logo" />
              <p>LenDen</p>
            </div>

            <div className="login-form-input">
              <p>Sign into your account</p>
              <div className="login-form-input-div">
                <div>
                  <input type="email" className="login-form-input-box" required placeholder="Email address" />
                </div>
                <div>
                  <input type="password" className="login-form-input-box"  required placeholder="Password" />
                </div>
                <div>
                  <button className="login-button">Login</button>
                </div>
              </div>
            </div>
            <div className="login-extra-info">
              <p>Forgot Password ?</p>
              <p>
                Don't have an account?{" "}
                <span >
                  <Link to="/register" className="register">Register Here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Login;
