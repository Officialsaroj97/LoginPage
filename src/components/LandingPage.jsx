import React from "react";
import "./LandingPage.css";
import logo from "../assets/images/logo.png";

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
