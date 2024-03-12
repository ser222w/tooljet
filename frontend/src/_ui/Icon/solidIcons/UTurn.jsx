import React from 'react';

const UTurn = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5273 4.043C13.8554 2.37108 11.1446 2.37108 9.47272 4.043L3.75394 9.76179C2.08202 11.4337 2.08202 14.1444 3.75394 15.8163L9.47272 21.5351C11.1446 23.207 13.8554 23.207 15.5273 21.5351L21.2461 15.8163C22.918 14.1444 22.918 11.4337 21.2461 9.76178L15.5273 4.043ZM14.75 16.7891C14.75 17.2033 15.0858 17.5391 15.5 17.5391C15.9142 17.5391 16.25 17.2033 16.25 16.7891V11.7891C16.25 9.71799 14.5711 8.03906 12.5 8.03906C10.4289 8.03906 8.75 9.71799 8.75 11.7891V13.3926L8.03033 12.6729C7.73744 12.3801 7.26256 12.3801 6.96967 12.6729C6.67678 12.9658 6.67678 13.4407 6.96967 13.7336L8.26256 15.0265C8.94598 15.7099 10.054 15.7099 10.7374 15.0265L12.0303 13.7336C12.3232 13.4407 12.3232 12.9658 12.0303 12.6729C11.7374 12.3801 11.2626 12.3801 10.9697 12.6729L10.25 13.3926V11.7891C10.25 10.5464 11.2574 9.53906 12.5 9.53906C13.7426 9.53906 14.75 10.5464 14.75 11.7891V16.7891Z"
      fill={fill}
    />
  </svg>
);

export default UTurn;
