import React from "react";
import Right from "./Right";
import "../Styles/frame.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="element">
        <img className="image" alt="Ima" src="img/frame1.png" />
        <div className="content">
          <p className="text-wrapper">Creating Streamlined Safeguarding Processes with OneRen</p>
          <div className="div">
            <div className="text-wrapper-2">Readmore</div>
            <Right className="element-arrows-directions" color="#4CAF4F" />
          </div>
        </div>
      </div>
      <div className="element">
        <img className="img" alt="Ima1" src="img/frame2.png" />
        <div className="content">
          <p className="text-wrapper">What are your safeguarding responsibilities and how can you manage them?</p>
          <div className="div">
            <div className="text-wrapper-2">Readmore</div>
            <Right className="element-arrows-directions" color="#4CAF4F" />
          </div>
        </div>
      </div>
      <div className="element">
        <img className="img" alt="Ima1" src="img/frame3.png" />
        <div className="content">
          <p className="text-wrapper">What are your safeguarding responsibilities and how can you manage them?</p>
          <div className="div">
            <div className="text-wrapper-2">Readmore</div>
            <Right className="element-arrows-directions" color="#4CAF4F" />
          </div>
        </div>
      </div>
    </div>
  );
};