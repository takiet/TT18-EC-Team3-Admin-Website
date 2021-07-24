import React from "react";
import "./Input.scss";

export const Input = React.forwardRef<any, IInput>(
  (
    {
      className,
      name,
      placeholder,
      marginBottom,
      marginTop,
      isFocus = false,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <div className={`input ${className}`} style={{ marginBottom, marginTop }}>
        <input
          autoFocus={isFocus}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);
