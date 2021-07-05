import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router";
import "./Tutor.scss";

type Props = {
  tutor: ITutor;
};

export const Tutor: React.FC<Props> = ({ tutor }) => {
  const { name, image, location, teachingSubject, teachingLevel, rating } =
    tutor;
  const history = useHistory();
  return (
    <div
      className="tutor-container"
      onClick={() => {
        history.push({
          pathname: "./tutor-profile",
          state: {
            image: image,
            name: name,
            location: location,
            teachingSubject: teachingSubject,
            teachingLevel: teachingLevel,
            rating: rating,
            workExperience: tutor.workExperience,
            education: tutor.education, 
            quote: tutor.quote,
            courses: tutor.courses
          },
        });
      }}
    >
      <div className="tutor-image">
        <img src={image} alt="tutor image" />
      </div>
      <div className="tutor-information">
        <div className="information-left">
          <div className="information-left__name">
            <h3>{name}</h3>
            <div className="information-left__rating">
              <span> {rating}</span>
              <AiFillStar size={20} color="#EEA320" />
            </div>
          </div>
          <div className="information-left__location">
            <div className="icon">
              <img src="./images/location_on.png" alt="location icon" />
            </div>
            <p>{location}</p>
          </div>
          <div className="information-left__teachingSubjects">
            <div className="icon">
              <img
                src="./images/collections_bookmark.png"
                alt="subjects icon"
              />
            </div>
            <p>
              <b>{teachingSubject.join()}</b>
            </p>
          </div>
          <div className="information-left__teachingLevel">
            <div className="icon">
              <img src="./images/school.png" alt="level icon" />
            </div>
            <p>
              <b>{teachingLevel.join()}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
