import React from "react";
import MaskedInput, { maskArray } from "react-text-mask";

import "./MaskInput.scss";

interface IMaskInput extends IInput {
  mask?: maskArray | ((value: string) => maskArray) | undefined;
  maskPlaceholder?: string;
  textAlign?: "center";
  id?: string;
}

export const MaskInput = React.forwardRef<any, IMaskInput>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      type,
      width,

      className,
      name,
      error,

      paddingBottom,
      paddingLeft,
      paddingRight,
      mask,
      textAlign,
      id,
    },
    ref
  ) => {
    return (
      <div
        className="mask-input"
        style={{ paddingBottom: `${paddingBottom}` }}
        id={id}
      >
        {label && <p className="mask-input__label">{label}</p>}
        <div className={`mask-input__container ${className}`} style={{ width }}>
          <MaskedInput
            placeholder={placeholder}
            name={name}
            defaultValue={value}
            onChange={onChange}
            style={{
              paddingLeft,
              paddingRight: paddingRight,
              textAlign,
            }}
            type={type}
            onBlur={onBlur}
            ref={ref}
            autoComplete="off"
            inputMode="numeric"
            mask={mask}
            keepCharPositions={true}
          />
        </div>
        {error && <div className="mask-input__error">{error}</div>}
      </div>
    );
  }
);
