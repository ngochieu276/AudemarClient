import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren<any> {
  color?: string;
  width?: number;
  height?: number;
}

export const Youtube: React.FC<Props> = ({ color = 'white', width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.556 7.19654C21.4421 6.77318 21.2189 6.38717 20.9089 6.07715C20.5989 5.76713 20.2129 5.54399 19.7895 5.43004C18.6325 4.98304 7.4235 4.76404 4.1715 5.44254C3.74808 5.55653 3.36202 5.77975 3.052 6.08986C2.74198 6.39997 2.51887 6.78609 2.405 7.20954C1.8825 9.50104 1.843 14.455 2.418 16.798C2.53194 17.2214 2.75509 17.6074 3.06511 17.9174C3.37512 18.2275 3.76114 18.4506 4.1845 18.5645C6.476 19.092 17.37 19.166 19.8025 18.5645C20.2259 18.4506 20.6119 18.2275 20.9219 17.9174C21.2319 17.6074 21.4551 17.2214 21.569 16.798C22.126 14.3015 22.1655 9.65454 21.556 7.19654Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2835 11.9975L10.06 9.00195V14.993L15.2835 11.9975Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
