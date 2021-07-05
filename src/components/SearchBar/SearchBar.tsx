import React from "react";
import "./SearchBar.scss";
import {RiSearch2Line} from 'react-icons/ri';
export const SearchBar: React.FC<ISearchBar> = ({
  className,
  id,
  name,
  placeholder,
  marginBottom,
  marginTop,
  paddingLeft, paddingRight,
  isFocus = false,
  onClick,
}) => {
  return (
    <div
      className={`searchbar ${className}`}
      style={{ marginBottom, marginTop, paddingLeft, paddingRight }}
    >
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={isFocus}
      />
      <RiSearch2Line className="searchbar__icon" size={25}/>
    </div>
  );
};
