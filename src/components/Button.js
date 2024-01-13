// src/components/Button.js
import React from 'react';

const Button = ({ className, divClassName, icon, size, state, text, type }) => {
  return (
    <button className={className}>
      <div className={divClassName}>
        {icon && <img className="icon" src="chemin/vers/icone.svg" alt="Icon" />}
        <span className={`text ${size} ${state} ${type}`}>{text}</span>
      </div>
    </button>
  );
};

export default Button;
