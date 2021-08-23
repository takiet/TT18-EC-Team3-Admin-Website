import React from "react";
import { Button, Input, Textarea } from "../../components/common";
import "./CourseDetail.scss";

export const CourseDetail: React.FC = () => {
  return (
    <div className="course-detail">
      <div className="course-detail__header">
        <div className="course-detail__title">COURSE DETAIL</div>
        <div className="course-detail__button">
          <Button isWhite>RETURN</Button>
          <Button marginLeft={16}>SAVE</Button>
        </div>
      </div>
      <div className="course-detail__input">
        <div className="course-detail__left">
          <Input label="Name" />
          <Input label="Avatar" />
          <Input label="Price" />
          <Input label="Duration" />
          <Input label="Level" />
          <Textarea label="Overview" />
        </div>
        <div className="course-detail__right">
          <Input label="" />
          <Input label="name" />
          <Input label="name" />
        </div>
      </div>
    </div>
  );
};
