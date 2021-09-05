import React from "react";
import { Avatar } from "../Avatar/Avatar";
import "./SideBar.scss";
import { checkFocus, logout } from "../../../helpers";
import { useHistory, useLocation } from "react-router";
import { GiTeacher } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { RiBillFill, RiBookletFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
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
      <div className={"side-bar__item"} onClick={() => logout()}>
        <p style={{ textAlign: "center", width: "100%", background: "#aaa" }}>
          LOGOUT
        </p>
      </div>
      <div
        className={
          checkFocus(pathname, "/")
            ? "side-bar__item side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/")}
      >
        <GiTeacher className="side-bar__icon" />
        <p>Tutors</p>
      </div>

      <div
        className={
          checkFocus(pathname, "/course")
            ? "side-bar__item side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/course")}
      >
        <RiBookletFill className="side-bar__icon" />
        <p>Courses</p>
      </div>
      {/* <div
        className={
          checkFocus(pathname, "/order")
            ? " side-bar__item side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/order")}
      >
        <RiBillFill className="side-bar__icon" /> <p>Orders</p>
      </div> */}

      <div
        className={
          checkFocus(pathname, "/payment")
            ? "side-bar__item side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/payment")}
      >
        <MdPayment className="side-bar__icon" />
        <p>Payment</p>
      </div>
      <div
        className={
          checkFocus(pathname, "/voucher")
            ? "side-bar__item side-bar__clicked"
            : "side-bar__item"
        }
        onClick={() => history.push("/voucher")}
      >
        <IoTicketSharp className="side-bar__icon" />
        <p>Vouchers</p>
      </div>
    </div>
  );
};
