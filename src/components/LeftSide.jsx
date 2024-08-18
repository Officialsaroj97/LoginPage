import React from "react";
import "./LeftSide.css"; // Import the CSS file
import mainlogo from "../assets/images/mainlogo.png"; // Adjust the path as needed
import bg from "../assets/images/bg.png"; // Adjust the path as needed

const LeftSide = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <header>
        <img
          src={mainlogo}
          alt="main-logo"
          data-aos="fade-down"
          data-aos-duration="1000"
        />
        <span>
          <p>Are you a new customer?</p>
        </span>
        <span>
          <button type="button">Enroll Now</button>
        </span>
      </header>
      <div className="login-form" data-aos="fade-up" data-aos-duration="3000">
        <form action="POST">
          <span className="both">
            <h1>Welcome Back</h1>
            <p>Sign in to your Regions MyMortgage account.</p>
          </span>
          <div>
            <input
              type="username"
              id="user"
              name="username"
              placeholder=" "
              required
            />
            <label htmlFor="user">Online ID</label>
          </div>
          <div>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder=" "
              required
            />
            <label htmlFor="pass">Password</label>
          </div>
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div className="atwo">
            <a href="#forgot-id">Forgot Online ID? .</a>
            <a href="#forgot-password">Forgot Password</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftSide;
