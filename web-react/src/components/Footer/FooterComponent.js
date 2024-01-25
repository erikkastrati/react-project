import React from "react";
import "../Footer/FooterComponent.css";
import Logo from "../../assets/image/Logo";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <footer className="footer-container">
          <div className="footer-section">
            <div className="logo">
              <Logo />
            </div>
            <div className="slogan">Canvix</div>
            <p className="short-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="footer-section">
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Utility Pages</h4>
            <ul>
              <li>Error Page</li>
              <li>License</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Subscribe</h4>
            <p>Subscribe to our newsletter.</p>
            <div className="subscription-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </footer>
        <div className="copyright-section">
          <p>
            &copy; 2024{" "}
            <Link
              to="www.linkedin.com/in/erikkastrati"
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}>
              Erik Kastrati
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
