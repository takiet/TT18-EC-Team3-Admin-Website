import React from "react";
import "./Button.scss";

export const Button: React.FC<IButton> = ({
  children,
  className,
  borderRadius,
  width,
  height,
  padding,
  onClick,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  paddingBottom,
  paddingLeft,
  paddingTop,
  paddingRight,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  background,
  border,
  type,
  isWhite,
  disabled = false,
}) => {
  const buildClassName = () => {
    if (isWhite) {
      return `btn btn--white ${className}`;
    }
    return `btn ${className}`;
  };

  return (
    <button
      className={buildClassName()}
      type={type}
      style={{
        borderRadius,
        height,
        width,
        padding,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        paddingBottom,
        paddingLeft,
        paddingTop,
        paddingRight,
        color,
        backgroundColor,
        fontSize,
        fontWeight,
        background,
        border,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
