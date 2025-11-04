import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="AA" transform="translate(11.000000, 5.000000)">
        <g fill="currentColor">
          {/* First A - left positioned */}
          <path d="M 25 57 L 28 57 L 29.5 52 L 37.5 52 L 39 57 L 42 57 L 34.5 35 L 32.5 35 Z M 30.5 49 L 33.5 39 L 36.5 49 Z" />
          {/* Second A - right positioned, overlapping */}
          <path d="M 36 57 L 39 57 L 40.5 52 L 48.5 52 L 50 57 L 53 57 L 45.5 35 L 43.5 35 Z M 41.5 49 L 44.5 39 L 47.5 49 Z" />
        </g>
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
