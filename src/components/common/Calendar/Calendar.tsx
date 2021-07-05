import React, { useState } from "react";
import { currDate } from "../../../constants";
import { checkEqualDate, daysOfMonth } from "../../../helpers";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import moment from 'moment';

import "./Calendar.scss";

export const Calendar: React.FC<ICalendar> = ({
  onSelect,
  value,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  paddingBottom,
  paddingRight,
  paddingTop,
  paddingLeft,
  onChangePreAndNext,
  // values,
}) => {
  const [month, setMonth] = useState(currDate.getMonth());
  const [year, setYear] = useState(currDate.getFullYear());

  const handleChooseDay = (time: {
    day: number;
    month: number;
    year: number;
  }) => {
    if (onSelect) {
      return onSelect(new Date(time.year, time.month, time.day));
    }
  };

  const handlePreMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((year) => year - 1);
      return onChangePreAndNext(month, year);
    }
    setMonth((month) => month - 1);
    return onChangePreAndNext(month, year);
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((year) => year + 1);
      return onChangePreAndNext(month, year);
    }
    setMonth((month) => month + 1);
    return onChangePreAndNext(month, year);
  };

  const classeNameDays = (itemTime: Date) => {
    let className = "calendar__day";
    // values.forEach((item) => {
    //   const date = new Date(item.datemeeting);
    //   if (
    //     date.getDate() === itemTime.getDate() &&
    //     date.getMonth() === itemTime.getMonth() &&
    //     date.getFullYear() === itemTime.getFullYear()
    //   ) {
    //     className = className + " calendar__day--appointment";
    //   }
    // });

    if (checkEqualDate(itemTime)) {
      className = className + " calendar__day--current";
    }

    if (
      value &&
      value.getDate() === itemTime.getDate() &&
      value.getMonth() === itemTime.getMonth() &&
      value.getFullYear() === itemTime.getFullYear()
    ) {
      className = className + " calendar__day--select";
    }

    return className;
  };

  return (
    <div
      className="calendar"
      style={{
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        padding,
        paddingBottom,
        paddingRight,
        paddingTop,
        paddingLeft,
      }}
    >
      <div className="calendar__picker">
        <IoIosArrowBack style={{ cursor: "pointer" }} onClick={handlePreMonth} size={20}/>
        <p>{` ${moment.months(month - 1)} ${year}`}</p>
        <IoIosArrowForward style={{ cursor: "pointer" }} onClick={handleNextMonth} size={20}/>
      </div>
      <div className="calendar__body">
        <div className="calendar__week-day">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="calendar__days">
          {daysOfMonth(month, year).map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => handleChooseDay(item)}
                style={{ pointerEvents: item.day > 0 ? "auto" : "none" }}
                className={classeNameDays(
                  new Date(item.year, item.month, item.day)
                )}
              >
                {item.day > 0 && item.day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
