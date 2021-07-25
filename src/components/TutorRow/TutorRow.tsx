import React from "react";
import { Avatar } from "../common";
import "./TutorRow.scss";
import { GrEdit } from "react-icons/gr";
import { MdBlock } from "react-icons/md";
export const TutorRow: React.FC<ITutorRow> = ({
  index,
  name,
  email,
  phone,
  avatar,
}) => {
  return (
    <tr className="tutor-row">
      <td>
        <GrEdit size={20} />
      </td>
      <td>{index}</td>
      <td>
        <div className="tutor-row__name">
          <Avatar
            image={
              avatar ||
              "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {name}
        </div>
      </td>
      <td>{phone}</td>
      <td className="tutor-row__email"> {email}</td>
      <td>
        <MdBlock size={24} />
      </td>
    </tr>
  );
};
