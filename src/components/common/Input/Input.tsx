import React from "react";
import "./Input.scss";

export const Input: React.FC<IInput> = ({
  className,
  id,
  name,
  placeholder,
  marginBottom,
  marginTop,
  isFocus = false,
  onClick,
}) => {
  return (
    <div
      className={`input ${className}`}
      style={{ marginBottom, marginTop }}
    >
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        autoFocus={isFocus}
      />
    </div>
  );
};
