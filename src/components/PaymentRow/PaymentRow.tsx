import React from "react";
import { Avatar } from "../common";
import "./PaymentRow.scss";

export const PaymentRow: React.FC<IPaymentRow> = ({
  index,
  username,
  useravatar,
  tutorname,
  tutoravatar,
  coursename,
  courseavatar,
  amount,
  onClick,
}) => {
  return (
    <tr className="tutor-row" key={index} onClick={onClick}>
      <td>{index}</td>
      <td>
        <div className="tutor-row__name">
          <Avatar
            image={
              useravatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : useravatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {username}
        </div>
      </td>
      <td>
        <div className="tutor-row__name">
          <Avatar
            image={
              tutoravatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : tutoravatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {tutorname}
        </div>
      </td>
      <td>
        <div className="tutor-row__name">
          <Avatar
            image={
              courseavatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : courseavatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {coursename}
        </div>
      </td>
      <td> {amount}</td>
    </tr>
  );
};
