import React from "react";
import "./Header.scss";
import logo from "../../assets/icons/primary.png";
import { SearchBar } from "../SearchBar/SearchBar";
import { FiBell } from "react-icons/fi";
import { Button } from "../common";
import { useHistory } from "react-router";

export const Header: React.FC<IHeader> = ({}) => {
  const history = useHistory();
  return (
    <div className="header">
      <img
        src={logo}
        className="header__logo"
        onClick={() => history.push("/")}
      />
      <SearchBar paddingRight={30} placeholder="Find your best tutor here" />
      <FiBell size={26} className="header__noti" />
      <div className="header__button-wrapper">
        <Button isWhite={true} marginRight={8}>
          Log In
        </Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};
