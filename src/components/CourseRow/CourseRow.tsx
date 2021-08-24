import React from "react";
import { Avatar } from "../common";
import "./CourseRow.scss";
import { GrEdit } from "react-icons/gr";
import { MdBlock } from "react-icons/md";
export const CourseRow: React.FC<ICourseRow> = ({
  index,
  name,
  avatar,
  avatartutor,
  tutor,
  price,
  onClick,
}) => {
  return (
    <tr className="course-row" key={index} onClick={onClick}>
      <td>
        <GrEdit size={20} onClick={onClick} />
      </td>
      <td>{index}</td>
      <td>
        <div className="course-row__name">
          <Avatar
            image={
              avatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : avatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {name}
        </div>
      </td>
      <td>
        <div className="course-row__name">
          <Avatar
            image={
              avatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : avatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {tutor}
        </div>
      </td>
      <td className="course-row__price"> {price}</td>
      <td>
        <MdBlock size={24} />
      </td>
    </tr>
  );
};
