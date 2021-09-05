import React from "react";
import { Avatar } from "../common";
import "./CourseRow.scss";
import { AiFillStar } from "react-icons/ai";
export const CourseRow: React.FC<ICourseRow> = ({
  index,
  name,
  avatar,
  price,
  onClick,
  duration,
  rating,
}) => {
  return (
    <tr className="course-row" key={index} onClick={onClick}>
      {/* <td>
        <GrEdit size={20} onClick={onClick} />
      </td> */}
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
        <div className="course-row__name">{duration}</div>
      </td>
      <td>
        <span className="course-row__rating">
          <AiFillStar size={22} style={{ marginRight: 8, color: "orange" }} />
          {rating}
        </span>
      </td>
      <td className="course-row__price"> {price}</td>
      {/* <td>
        <MdBlock size={24} />
      </td> */}
    </tr>
  );
};
