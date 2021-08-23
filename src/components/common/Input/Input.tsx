import React from "react";
import "./Input.scss";

export const Input = React.forwardRef<any, IInput>(
  (
    {
      className,
      name,
      placeholder,
      label,
      marginBottom,
      marginTop,
      isFocus = false,
      onChange,
      onBlur,
      type,
    },
    ref
  ) => {
    return (
      <div className="input-container">
        {label && <p className="input__label">{label}</p>}
        <div
          className={`input ${className}`}
          style={{ marginBottom, marginTop }}
        >
          <input
            autoFocus={isFocus}
            placeholder={placeholder}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            type={type}
          />
        </div>
      </div>
    );
  }
);
