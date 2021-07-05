import { AiFillStar, AiOutlineBook } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { Label } from "../common";
import "./CourseItem.scss";
export const CourseItem: React.FC<ICourseItem> = ({
  id,
  name,
  durations,
  level,
  subject,
  rating,
}) => {
  return (
    <div className="course-item" key={id}>
      <div className="course-item__image">
          <img src="https://hacentre.edu.vn/wp-content/uploads/2020/10/tu-vung-ielts-speaking-chu-de-study-work-19.jpg"></img>
      </div>
      <div className="course-item__info">
        <div className="course-item__header">
          <p className="course-item__name">{name}</p>
          <div className="course-item__rating">
            <span>{rating} </span>
            <AiFillStar size={20} color="#EEA320" />
          </div>
        </div>

        <Label
          icon={<GiSandsOfTime size={18} />}
          title={<p className="course-item__title">Duration: {durations}</p>}
        />
        <Label
          icon={<IoSchoolOutline size={16} />}
          title={<p className="course-item__title">Level: {level}</p>}
        />
        <Label
          icon={<AiOutlineBook size={16} />}
          title={<p className="course-item__title">Subject: {subject}</p>}
        />
      </div>
    </div>
  );
};
