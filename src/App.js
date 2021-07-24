import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import moneyExchange from "./images/homepage-lend.png";
import moneyBag from "./images/homepage-lend2.png";
import dashboard from "./images/dashboard-pc.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
            <p>LenDen</p>
          </div>
          <div className="auth">
            <div>
              <Link to="/login" className="auth-button">
                Login
              </Link>
            </div>
            <div>
              <Link to="/register" className="auth-button">
                Register
              </Link>
            </div>
          </div>
        </div>
        <section className="container">
          <div className="moneyExchange ">
            <div className="container-div">
              <div className="image-container">
                <img src={moneyExchange} alt="moneyExchange" />
              </div>
              <div className="content">
                <div>
                  <p className="content-heading">Borrow And Lend</p>
                  <p className="content-heading">
                    Money In <span>One</span>
                  </p>
                </div>
                <div>
                  <p className="content-description">
                    Borrow money from a real Person, lend money to someone in
                    need and get a tip in return. Money based on needs, not
                    paydays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="moneyBag ">
            <div className="container-div">
              <div className="content">
                <div>
                  <p className="content-heading">Borrowing</p>
                  <p className="content-details">
                    Get money from <span>real person </span>
                    and say thanks by tipping them back.
                  </p>
                </div>
                <div>
                  <p className="content-heading">Lending</p>
                  <p className="content-details">
                    Make <span>extra cash</span> by lending to someone in need
                    and get a tip in return.
                  </p>
                </div>
              </div>

              <div className="image-container">
                <img src={moneyBag} alt="moneyBag}" />
              </div>
            </div>
          </div>

          <div className="dashboard ">
            <div className="container-div">
              <div className="image-container">
                <img src={dashboard} alt="dashboard" />
              </div>
              <div className="content">
                <div>
                  <p className="content-heading">Dashboard</p>
                  <p className="content-details">
                    Get <span>analysis</span> of daily and monthly expenditure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-div">
          <div className="footer-socials">
            <div>
              <p>Get connected with us on social networks : </p>
            </div>

            <div className="footer-socials-images">
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
              />
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="Twitter"
              />
              <img
                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                alt="Instagram"
              />
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="Linkedin"
              />
            </div>
          </div>

          <div className="footer-info">
            <div className="footer-info-about">
              <div className="footer-info-about-logo">
                <div>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/diamond--v1.png"
                    alt="Logo"
                  />
                </div>
                <p>LENDEN</p>
              </div>
              <div>
                <p>
                  We are building an platform where people can earn by lending
                  money directly to the people who are in need of money or where
                  people can borrow money from others.
                </p>
              </div>
            </div>

            <div className="footer-quicklinks-list">
              <p className="footer-list-heading">INVEST</p>
              <ol>
                <li> How It works</li>
                <li>Benefit</li>
                <li>Get Started</li>
              </ol>
            </div>

            <div className="footer-quicklinks-list-company footer-quicklinks-list">
              <p className="footer-list-heading">COMPANY</p>
              <ol>
                <li>About</li>
                <li>Team</li>
                <li>Press</li>
              </ol>
            </div>

            <div className="footer-quicklinks-contact-list">
              <p className="footer-list-heading">CONTACT</p>
              <ol>
                <li className="footer-quicklinks">
                  <div className="footer-quicklinks-logo">
                    <img
                      src="https://img.icons8.com/material-rounded/24/000000/home.png"
                      alt="location"
                    />
                  </div>
                  <div>
                    <p>India</p>
                  </div>
                </li>
                <li className="footer-quicklinks">
                  <div className="footer-quicklinks-logo">
                    <img
                      src="https://img.icons8.com/material-rounded/24/000000/new-message.png"
                      alt="mailId"
                    />
                  </div>
                  <div>
                    <p>team@lenden.com</p>
                  </div>
                </li>
                <li className="footer-quicklinks">
                  <div className="footer-quicklinks-logo">
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/phone.png"
                      alt="call"
                    />
                  </div>
                  <div>
                    <p>+ 91 999 9999 999</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="copyright">
            <p>© 2021 Copyright: LenDen.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
