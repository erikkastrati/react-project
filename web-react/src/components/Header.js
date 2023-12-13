// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Signup from '../pages/Signup';
import "./Header.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
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
        <div onClick={openSignupModal} className="navbar-item">
          Signup
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        ☰
      </div>
      <Modal
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Signup Modal"
      >
        <Signup />
       
      </Modal>
    </div>
  );
};

export default Header;
