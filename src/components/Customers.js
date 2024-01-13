import React from "react";
import Right from "./Right";
import "../Styles/customer.css";
import "../Styles/style.css";

export const Customers = () => {
  return (
    <div>
    <div className="customer-s">
      <img className="image" alt="Ima" src="img/image-9.png" />
      <div className="frame">
        <div className="content">
          <p className="we-have-enjoyed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
            ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
            Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis
            vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim
            finibus ac sit amet magna.
          </p>
          <div className="div">
            <div className="text-wrapper">Tim Smith</div>
            <p className="p">British Dragon Boat Racing Association</p>
          </div>
        </div>
        <div className="frame-2">
          <img className="img" alt="Frame" src="img/customer.svg" />
          <div className="frame-3">
            <div className="text-wrapper-2">Meet all customers</div>
            <Right className="element-arrows-directions" color="#4CAF4F" />
          </div>
        </div>
      </div>
    </div>
    <div className="community">
    <p className="section-title">Caring is the new marketing</p>
    <p className="description">
      The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s
      joining the community, read about how our community are increasing their membership income and lot&#39;s more.​
    </p>
  </div>
  </div>
  );
};