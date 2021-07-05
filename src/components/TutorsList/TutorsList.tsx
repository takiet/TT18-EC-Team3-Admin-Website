import "./TutorsList.scss";
import data from "./../../data.json";
import { Tutor } from "../Tutor/Tutor";

export const TutorsList = () => {
  return (
    <div className="tutorsList-container">
      <h2>Tutor suggestions</h2>
      <div className="tutorsList">
        {data.tutors.map((item) => (
          <Tutor key={item.id} tutor={item} />
        ))}
      </div>
    </div>
  );
};
