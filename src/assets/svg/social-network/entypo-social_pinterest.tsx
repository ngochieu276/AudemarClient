import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<any> {
  color?: string;
  width?: number;
  height?: number;
}

export const Pinterest: React.FC<Props> = ({ color = 'white', width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_52_582)">
        <path
          d="M10.3404 15.8719C9.70919 19.1767 8.93999 22.3447 6.65879 23.9995C5.95559 19.0051 7.69199 15.2551 8.49959 11.2735C7.12319 8.95754 8.66519 4.29914 11.5656 5.44754C15.1356 6.85874 8.47439 14.0539 12.9456 14.9539C17.6148 15.8911 19.5204 6.85394 16.6248 3.91514C12.4428 -0.330463 4.44959 3.81554 5.43359 9.89354C5.67239 11.3791 7.20719 11.8291 6.04679 13.8799C3.36959 13.2871 2.57039 11.1751 2.67359 8.35994C2.83919 3.75194 6.81239 0.527537 10.7988 0.0799369C15.84 -0.485263 20.5716 1.93154 21.2256 6.67274C21.9612 12.0259 18.9504 17.8243 13.5588 17.4067C12.0972 17.2927 11.4852 16.5679 10.3404 15.8719Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_52_582">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
