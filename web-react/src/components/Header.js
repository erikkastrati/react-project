// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          Logo
        </Link>
      </div>
      <div className={`navbar-items ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
        <Link to="/about" activeClassName="active">
          About
        </Link>
        <Link to="/login" activeClassName="active">
          Login
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
};

export default Header;
