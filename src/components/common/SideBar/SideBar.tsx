import React from "react";
import { Avatar } from "../Avatar/Avatar";
import "./SideBar.scss";
import { checkFocus, logout } from "../../../helpers";
import { useHistory, useLocation } from "react-router";
import { FiUser } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
export const SideBar = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <div className="side-bar">
      <Avatar
        image="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
        height={100}
        width={100}
        marginBottom={20}
      />
       <div
        className={
          checkFocus(pathname, "/customer")
            ? "side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => logout()}
      >
         Logout
      </div>
      <div
        className={
          checkFocus(pathname, "/customer")
            ? "side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/customer")}
      >
        <FiUser className="side-bar__icon"/> Users
      </div>
      <div
        className={
          checkFocus(pathname, "/tutor")
            ? "side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/tutor")}
      >
        <FaChalkboardTeacher className="side-bar__icon"/>
        Tutors
      </div>
      <div
        className={
          checkFocus(pathname, "/payment")
            ? "side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/payment")}
      >
        <MdPayment className="side-bar__icon"/>
        Payment
      </div>
    </div>
  );
};
