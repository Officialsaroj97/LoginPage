import React from "react";
import "./RightSide.css";
import bg from "../assets/images/bg.png";

const RightSide = () => {
  return (
    <div className="right-side" data-aos="fade-right" data-aos-duration="1000">
      <img src={bg} alt="bg-img" />
    </div>
  );
};

export default RightSide;
