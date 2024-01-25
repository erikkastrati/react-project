import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "..//pages/Login.css";

const Login = ({ closeLoginModal, openSignupModal, onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onLogin();

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login">
      <div className="close-icon" onClick={closeLoginModal}>
        &times;
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
            })}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <p>
            New user?{" "}
            <Link to="/" onClick={openSignupModal}>
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
