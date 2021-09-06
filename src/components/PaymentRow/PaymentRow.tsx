import React from "react";
import { Avatar, Button } from "../common";
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
  status,
  onClickAccept,
  onClickRefund,
}) => {
  return (
    <tr className="payment-row" key={index} onClick={onClick}>
      <td>{index}</td>
      <td>
        <div className="payment-row__name">
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
        <div className="payment-row__name">
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
      <td>
        <div className="payment-row__name">
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
      <td>{amount}$</td>
      <td className="payment-row__status">
        {status === 0 && (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              isWhite
              width={100}
              onClick={(e) => {
                e.stopPropagation();
                return onClickRefund();
              }}
            >
              REFUND
            </Button>
            <Button
              width={100}
              onClick={(e) => {
                e.stopPropagation();
                return onClickAccept();
              }}
            >
              ACCPECT
            </Button>
          </div>
        )}
        {status === 1 && <p className="payment-row__accept">ACCPECTED</p>}
        {status === 2 && <p className="payment-row__reject">REFUNDED</p>}
      </td>
    </tr>
  );
};
