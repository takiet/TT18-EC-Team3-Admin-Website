import * as React from "react";

export const SvgPre: React.FC<ISvg> = ({ style, onClick }) => {
  return (
    <svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="#111"
      style={style}
      onClick={onClick}
    >
      <g
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path
          d="M6.577 2.03c.317-.29.394-.662.076-.952a.446.446 0 00-.558.043L1.356 5.424a.694.694 0 000 1.047l4.883 4.441c.318.29.74-.372.74-.372s.115-.2-.402-.675L2.269 5.948 6.577 2.03z"
          fill="#fff"
        />
        <path
          d="M6.577 2.03c.317-.29.394-.662.076-.952a.446.446 0 00-.558.043L1.356 5.424a.694.694 0 000 1.047l4.883 4.441c.318.29.74-.372.74-.372s.115-.2-.402-.675L2.269 5.948 6.577 2.03z"
          stroke="#fff"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};
