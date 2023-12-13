// Signup.js
import React, { useState } from "react";
import Modal from "react-modal";
import SignupForm from "../pages/SignupForm";
import "./Signup.css";

Modal.setAppElement("#root");

const Signup = ({isSuccess}) => {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openSuccessModal = () => {
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <div className="signup-container">
        <SignupForm/>

      <Modal
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Signup Modal"
      >
        <SignupForm
          closeSignupModal={closeSignupModal}
          onSuccess={openSuccessModal}
        />
      </Modal>

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeSuccessModal}
        contentLabel="Success Modal"
      >
        <h2>Signup Successful</h2>
        <p>You have successfully signed up!</p>
        <button onClick={closeSuccessModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Signup;
