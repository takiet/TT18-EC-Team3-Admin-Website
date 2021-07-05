import * as React from "react";

export const SvgNext: React.FC<ISvg> = ({ style, onClick }) => {
  return (
    <svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      style={style}
      onClick={onClick}
    >
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path
          d="M1.423 9.97c-.317.29-.394.662-.076.951.097.073.332.15.558-.042l4.739-4.303a.694.694 0 000-1.047L1.761 1.088c-.318-.29-.74.372-.74.372s-.115.2.402.675l4.308 3.917L1.423 9.97z"
          fill="#fff"
        />
        <path
          d="M1.423 9.97c-.317.29-.394.662-.076.951.097.073.332.15.558-.042l4.739-4.303a.694.694 0 000-1.047L1.761 1.088c-.318-.29-.74.372-.74.372s-.115.2.402.675l4.308 3.917L1.423 9.97z"
          stroke="#fff"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};
