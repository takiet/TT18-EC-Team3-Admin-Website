import React, { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { Input } from "../Input/Input";
import "./MultiInput.scss";

export const MultiInput: React.FC<IMultiInput> = ({
  onChange,
  onkeypress,
  className,
  values,
  marginBottom,
  onFocus,
  onBlur,
  errorTitle,
  label,
}) => {
  const [newItem, setNewItem] = useState("");
  const [options, setOptions] = useState<any>([]);

  const handleDelete = (i: number) => {
    const newList = options.filter((item: any, index: any) => index !== i);
    setOptions(newList.concat());
  };
  const refInput = useRef(document.createElement("input"));

  const handleAddItem = () => {
    if (newItem !== "") {
      const obj = {
        item: newItem,
      };
      setOptions([obj, ...options]);
      setNewItem("");
      refInput.current.value = "";
    }
  };

  useEffect(() => {
    return onChange(options); // eslint-disable-next-line
  }, [options]);

  useEffect(() => {
    setOptions(values);
  }, [values]);

  const Ref: any = useRef(null);

  const handleUserKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      Ref.current.click();
    }
  };

  return (
    <div className={`cv-dropdown ${className || ""}`} style={{ marginBottom }}>
      <p className="cv-dropdown__label">{label}</p>
      <div className="cv-dropdown__header">
        <Input
          onChange={(event) => setNewItem(event.target.value.trim())}
          onBlur={onBlur}
          autoComplete={"off"}
          onkeypress={handleUserKeyPress}
          onFocus={onFocus}
          ref={refInput}
        />
        <div
          className="cv-dropdown__icon-wrapper"
          onClick={handleAddItem}
          ref={Ref}
        >
          <BsPlus className="cv-dropdown__icon" size={22} color="white" />
        </div>
      </div>

      <div className={"cv-dropdown__body"}>
        <div className="cv-dropdown__item-list">
          {options &&
            options.map((item: any, i: any) => {
              return (
                <div className="cv-dropdown__item-wrapper" key={i}>
                  <p>{item.item || ""}</p>
                  <div onClick={() => handleDelete(i)}>
                    <IoCloseOutline className="cv-dropdown__item-button" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
