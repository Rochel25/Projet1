// Right.js
import React from 'react';

const Right = ({ className, color }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width="24px"
      height="24px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 17l5-5-5-5v10z" />
    </svg>
  );
};

export default Right;
