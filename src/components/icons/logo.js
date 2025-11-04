import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        <g fill="currentColor">
          {/* First A - left positioned */}
          <path d="M 25 57 L 28 57 L 29.5 52 L 37.5 52 L 39 57 L 42 57 L 34.5 35 L 32.5 35 Z M 30.5 49 L 33.5 39 L 36.5 49 Z" />
          {/* Second A - right positioned, overlapping */}
          <path d="M 36 57 L 39 57 L 40.5 52 L 48.5 52 L 50 57 L 53 57 L 45.5 35 L 43.5 35 Z M 41.5 49 L 44.5 39 L 47.5 49 Z" />
        </g>
      </g>
    </g>
  </svg>
);

export default IconLogo;
