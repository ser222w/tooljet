import React from 'react';

const Sun = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    data-cy="sun-icon"
  >
    <circle opacity="0.4" cx="12" cy="12" r="6" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6014 4.39849C19.8943 4.69139 19.8943 5.16626 19.6014 5.45915L18.8943 6.16626C18.6014 6.45915 18.1265 6.45915 17.8336 6.16626C17.5407 5.87337 17.5407 5.39849 17.8336 5.1056L18.5407 4.39849C18.8336 4.1056 19.3085 4.1056 19.6014 4.39849Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16632 17.8336C6.45921 18.1264 6.45921 18.6013 6.16632 18.8942L5.45921 19.6013C5.16632 19.8942 4.69144 19.8942 4.39855 19.6013C4.10566 19.3084 4.10566 18.8336 4.39855 18.5407L5.10566 17.8336C5.39855 17.5407 5.87342 17.5407 6.16632 17.8336Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.75 12C22.75 12.4142 22.4142 12.75 22 12.75L21 12.75C20.5858 12.75 20.25 12.4142 20.25 12C20.25 11.5858 20.5858 11.25 21 11.25L22 11.25C22.4142 11.25 22.75 11.5858 22.75 12Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 12C3.75 12.4142 3.41421 12.75 3 12.75L2 12.75C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25L3 11.25C3.41421 11.25 3.75 11.5858 3.75 12Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6014 19.6016C19.3085 19.8945 18.8336 19.8945 18.5407 19.6016L17.8336 18.8945C17.5407 18.6016 17.5407 18.1267 17.8336 17.8339C18.1265 17.541 18.6014 17.541 18.8943 17.8339L19.6014 18.541C19.8943 18.8339 19.8943 19.3087 19.6014 19.6016Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.16633 6.16656C5.87343 6.45945 5.39856 6.45945 5.10566 6.16656L4.39856 5.45945C4.10566 5.16656 4.10567 4.69169 4.39856 4.39879C4.69145 4.1059 5.16633 4.1059 5.45922 4.39879L6.16633 5.1059C6.45922 5.39879 6.45922 5.87367 6.16633 6.16656Z"
      fill={fill}
    />
  </svg>
);

export default Sun;
