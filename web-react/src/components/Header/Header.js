import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Avatar from "../../pages/Avatar";
import "./Header.css";

import Logo from "../../assets/image/Logo";
import ProfilePic from "../../assets/image/profile-avatar.jpg";
Modal.setAppElement("#root");

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSignupModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openLoginModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    const userAvatarUrl = ProfilePic;
    setUserAvatar(userAvatarUrl);
    closeLoginModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserAvatar(null);
  };

  const handleSignup = (signupData) => {
    console.log("Signup data:", signupData);

    setIsLoggedIn(true);

    const userAvatarUrl = ProfilePic;
    setUserAvatar(userAvatarUrl);

    closeSignupModal();
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">
          <Logo />
          Canvix
        </Link>
      </div>
      <div className={`navbar-items ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <div className="avatar-container">
            <Avatar userAvatar={userAvatar} />
            <span onClick={handleLogout}>Logout</span>
          </div>
        ) : (
          <span onClick={openLoginModal}>Login / Register</span>
        )}
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        ☰
      </div>

      <Modal
        isOpen={isSignupModalOpen || isLoginModalOpen}
        onRequestClose={isSignupModalOpen ? closeSignupModal : closeLoginModal}
        contentLabel="Signup and Login Modal"
        style={{
          content: {
            borderRadius: "20px",
            maxWidth: "300px",
            height: "390px",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}>
        {isLoginModalOpen ? (
          <Login
            closeLoginModal={closeLoginModal}
            openSignupModal={openSignupModal}
            onLogin={handleLogin}
          />
        ) : (
          <Signup closeSignupModal={closeSignupModal} onSignup={handleSignup} />
        )}
      </Modal>
    </div>
  );
};

export default Header;
