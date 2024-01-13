// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="div">
        <img className="icon" src="img/icon.svg" alt="Icon" />
        <img className="nexcent" src="img/nexcent.svg" alt="Nexcent" />
      </div>
      <div className="right-menu">
        <div className="header-menu">
          <div className="div">
            <div className="why-justgo">Home</div>
          </div>
          <div className="div">
            <div className="text-wrapper">Features</div>
          </div>
          <div className="div">
            <div className="text-wrapper">Community</div>
          </div>
          <div className="div">
            <div className="why-justgo-2">Blog</div>
          </div>
          <div className="div">
            <div className="why-justgo-2">Pricing</div>
          </div>
        </div>
        <button className="button">
          <div className="label">Register Now</div>
          <img
            className="element-arrows-directions"
            src="img/right.svg"
            alt="Right Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;

