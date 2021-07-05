import React, { useState } from "react";
import { Avatar, Button, Calendar, Label } from "../../components/common";
import "./TutorProfile.scss";
import { IoLocationOutline, IoBriefcaseSharp } from "react-icons/io5";
import {
  AiFillStar,
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineWarning,
} from "react-icons/ai";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

import { translateDay } from "../../helpers";
import { useLocation } from "react-router";
import { CourseItem } from "../../components";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";

export const TutorProfile = () => {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(translateDay(new Date()));

  const getDate = (date: Date) => {
    setDate(date);
    setDay(translateDay(date));
  };

  //handle move to next month on calendar
  const onChangePreAndNext = (month: any, year: any) => {};
  const { state } = useLocation<any>();
  console.log(state);

  return (
    <div className="container">
      <div className="tutor">
        <div className="tutor__header">
          <div className="tutor__info">
            <Avatar image={state.image} height={80} width={80} />
            <div className="tutor__first">
              <div className="tutor__name">
                <p>{state.name}</p>
                <span>{state.rating} </span>
                <AiFillStar size={20} color="#EEA320" />
              </div>
              <span className="tutor__location">
                <IoLocationOutline size={20} />
                <a
                  href={`http://maps.google.com/?q=${state.location}`}
                  target="_blank"
                >
                  {state.location}
                </a>
              </span>
            </div>
          </div>
          <Button width={180}>BOOK</Button>
        </div>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/3YLg9VuCTlU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={{ fontWeight: "bold", fontSize: 24, marginBottom: 8, marginTop: 16 }}>
          {state.name}
        </p>
        <p>{state.quote}</p>
        <div className="tutor__selection">
          <div className="tutor__selection-item">
            <AiOutlineCalendar size={20} />
            <p>Schedule</p>
          </div>
          <div className="tutor__selection-item">
            <AiOutlineHeart size={20} />
            <p>Like</p>
          </div>
          <div className="tutor__selection-item">
            <AiOutlineWarning size={20} />
            <p>Report</p>
          </div>
        </div>
        <Label icon={<FaGraduationCap size={22} />} title={"Education"} />
        <div className="tutor__description">
          {state.education.map((item: any, index: number) => {
            return <div key={index}>{item}</div>;
          })}
        </div>

        <Label
          icon={<IoBriefcaseSharp size={20} />}
          title={"Work Experience"}
        />
        <p className="tutor__description">{state.workExperience}</p>
        <Label
          icon={<FaChalkboardTeacher size={20} />}
          title={"Teaching level"}
        />
        <div className="tutor__teaching-level">
          {state.teachingLevel.map((item: any, index: number) => {
            return (
              <div className="tutor__level-item" key={index}>
                {item}
              </div>
            );
          })}
        </div>

        <div className="tutor__courses-list">
        <p style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>
          {state.name} teaches these courses
        </p>
          <ScrollHorizontal
            paddingLeft={8}
            marginBottom={16}
            marginTop={16}
            paddingBottom={8}
          >
            {state.courses.map((item: any, index: number) => {
              return (
                <CourseItem
                  key={index}
                  name={item.name}
                  durations={item.durations}
                  rating={item.rating}
                  subject={item.subject}
                  level={item.level}
                />
              );
            })}
          </ScrollHorizontal>
        </div>

        <div className="tutor__calendar">
          <Calendar
            onSelect={(v) => getDate(v)}
            value={date}
            onChangePreAndNext={onChangePreAndNext}
          />
        </div>
      </div>
    </div>
  );
};
