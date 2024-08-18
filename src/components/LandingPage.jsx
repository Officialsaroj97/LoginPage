import React from "react";
import "./LandingPage.css"; // Import the CSS file
import logo from "../assets/images/logo.png"; // Path to your logo image
import bg from "../assets/images/bg.png"; // Path to your background image

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div
        className="logo-container"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default LandingPage;
