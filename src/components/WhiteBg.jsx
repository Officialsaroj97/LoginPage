import React from "react";
import "./WhiteBg.css"; // Import the CSS file
import logo from "../assets/images/logo.png"; // Path to your logo image

const WhiteBg = () => {
  return (
    <div
      className="centered-logo"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default WhiteBg;
