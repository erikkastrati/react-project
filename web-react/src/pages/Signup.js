import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import "./Signup.css";

Modal.setAppElement("#root");

const Signup = ({ closeSignupModal, onSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      localStorage.setItem("userData", JSON.stringify(data));

      onSignup();

      closeSignupModal();
    }, 1000);
  };

  return (
    <div className="signup-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", { required: "Username is required" })}
          />
          <span className="error">{errors.username?.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword", {
              validate: (value) =>
                value === document.getElementById("password").value ||
                "Passwords do not match",
            })}
          />
          <span className="error">{errors.confirmPassword?.message}</span>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
