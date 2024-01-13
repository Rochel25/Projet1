import React from "react";
import Button from "./Button";
import "../Styles/style.css";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="frame">
        <div className="text">
          <p className="lessons-and-insights">
            <span className="text-wrapper">Lessons and insights </span>
            <span className="span">from 8 years</span>
          </p>
          <p className="div">Where to grow your business as a photographer: site or social media?</p>
        </div>
        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          icon={false}
          size="medium"
          state="default"
          text="Register"
          type="primary"
        />
      </div>
      <img className="illustration" alt="Illustration" src="img/illustration.svg" />
    </div>
  );
};
