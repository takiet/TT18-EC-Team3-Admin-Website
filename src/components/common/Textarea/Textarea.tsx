import React from "react";
import "./Textarea.scss";

export const Textarea = React.forwardRef<any, ITextarea>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      borderRadius,
      width,
      height,
      background,
      className,
      name,
      maxLength,
      marginBottom,
      error,
      defaultValue,
    },
    ref
  ) => {
    return (
      <div className="textarea" style={{ marginBottom }}>
        {label && <p className="textarea__label">{label}</p>}
        {maxLength && <p className="textarea__maxLength">{`0/${maxLength}`}</p>}
        <div
          className={`textarea__container ${className}`}
          style={{ borderRadius, height, width, background }}
        >
          <textarea
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            ref={ref}
            defaultValue={defaultValue}
          />
        </div>
        {error && <div className="textarea__error">{error}</div>}
      </div>
    );
  }
);
