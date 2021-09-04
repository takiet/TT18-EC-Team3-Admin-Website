import React from "react";
import "./VoucherRow.scss";
import { MdBlock } from "react-icons/md";
import moment from "moment";
export const VoucherRow: React.FC<IVoucherRow> = ({
  index,
  onClick,
  code,
  from,
  to,
  discount,
  type,
}) => {
  return (
    <tr className="course-row" key={index} onClick={onClick}>
      <td>{index}</td>
      <td>
        <div>{code}</div>
      </td>
      <td>{from && <div>{moment(from).format("DD/MM/YYYY")}</div>}</td>
      <td>{to && <div>{moment(to).format("DD/MM/YYYY")}</div>}</td>
      <td>
        <div>{discount}</div>
      </td>
      <td className="course-row__price"> {type ? "Amount" : "Percentage"}</td>
      <td>
        <MdBlock size={24} />
      </td>
    </tr>
  );
};
