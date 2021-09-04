import React from "react";
import "./Input.scss";

export const Input = React.forwardRef<any, IInput>(
  (
    {
      id,
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
      onFocus,
      autoComplete,
      onkeypress,
      error,
      defaultValue
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
            id={id}
            autoFocus={isFocus}
            placeholder={placeholder}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            type={type}
            autoComplete="off"
            onFocus={onFocus}
            onKeyPress={onkeypress}
            defaultValue={defaultValue}
          />
        </div>
        {error && <div className="input__error">{error}</div>}
      </div>
    );
  }
);
