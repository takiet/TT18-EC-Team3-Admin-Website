import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, MultiInput, Textarea } from "../../components/common";
import { doAddCourse } from "../../redux";
import { useAppDispatch } from "../../redux/store";
import "./CourseDetail.scss";
const options = [];
type FormValues = {
  name: string;
  avatar: string;
  price: number;
  duration: string;
  level: string;
  overview: string;
  syllabus: Array<{ item: string }>;
  subject: Array<{ item: string }>;
  tutor: Array<{ id: string }>;
};
export const CourseDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [syllabus, setSyllabus] = useState([]);
  const [subject, setSubject] = useState([]);
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    console.log("hihi");
  }, []);

  const onSubmit = (data: any) => {
    dispatch(doAddCourse(data));
    console.log(data);
  };
  useEffect(() => {
    setValue("syllabus", syllabus); // eslint-disable-next-line
  }, [syllabus]);

  useEffect(() => {
    setValue("subject", subject); // eslint-disable-next-line
  }, [subject]);

  useEffect(() => {
    setValue("tutor", [{ id: "612355e45bb32900239f2e6d" }]); // eslint-disable-next-line
  }, [tutor]);

  return (
    <form className="course-detail" onSubmit={handleSubmit(onSubmit)}>
      <div className="course-detail__header">
        <div className="course-detail__title">COURSE DETAIL</div>
        <div className="course-detail__button">
          <Button isWhite>RETURN</Button>
          <Button marginLeft={16} type="submit">
            SAVE
          </Button>
        </div>
      </div>
      <div className="course-detail__input">
        <div className="course-detail__left">
          <Input label="Name" {...register("name")} />
          <Input label="Avatar" {...register("avatar")} />
          <Input label="Price" {...register("price")} />
          <Input label="Duration" {...register("duration")} />
          <Input label="Level" {...register("level")} />
          <Textarea label="Overview" {...register("overview")} />
        </div>
        <div className="course-detail__right">
          <MultiInput
            label="Syllabus"
            onChange={(values) => {
              setSyllabus(values);
            }}
            values={options}
            marginBottom={16}
          />
          <MultiInput
            label="Subject"
            onChange={(values) => {
              setSubject(values);
            }}
            values={options}
            marginBottom={16}
          />

          {/* <MultiInput
            label="Tutor"
            onChange={(values) => {
              setTutor(values);
            }}
            values={options}
            marginBottom={16}
          /> */}
        </div>
      </div>
    </form>
  );
};
