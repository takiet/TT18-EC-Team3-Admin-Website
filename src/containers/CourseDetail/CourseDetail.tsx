import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Input,
  ModalLoader,
  MultiInput,
  Textarea,
} from "../../components/common";
import { doGetAllListTutor, doGetOneCourse, doUpdateCourse } from "../../redux";
import { useAppDispatch } from "../../redux/store";
import "./CourseDetail.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { unwrapResult } from "@reduxjs/toolkit";

type FormValues = {
  name: string;
  avatar: string;
  price: number;
  duration: string;
  level: string;
  overview: string;
  syllabus: Array<{ item: string }>;
  subject: Array<{ item: string }>;
  // tutor: Array<{ id: string }>;
};
export const CourseDetail: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [syllabus, setSyllabus] = useState([]);
  const [subject, setSubject] = useState([]);
  // const listAllTutor = useSelector(
  //   (state: RootState) => state.tutorSlice.listAllTutor
  // );
  const { uid } = useParams<{ uid: string }>();
  const oneCourse = useSelector(
    (state: RootState) => state.courseSlice.oneCourse
  );
  const isLoading = useSelector(
    (state: RootState) => state.courseSlice.isLoading
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  //submit
  const onSubmit = (data: any) => {
    dispatch(doUpdateCourse({ cid: uid, value: data }))
      .then(unwrapResult)
      .then((result: any) => {
        if (result) {
          if (result.ok === 1) history.goBack();
        }
      });
  };
  const [selectedOptions] = useState([]);

  //get data
  useEffect(() => {
    dispatch(doGetOneCourse({ uid: uid }));
    dispatch(doGetAllListTutor());
    window.scrollTo({ top: 0, left: 0 });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    reset({
      name: oneCourse.name,
      avatar: oneCourse.avatar,
      price: oneCourse.price,
      duration: oneCourse.duration,
      level: oneCourse.level,
      overview: oneCourse.overview,
    }); // eslint-disable-next-line
  }, [oneCourse]);

  //handle change tutor array
  // const handleChange = (event, value) => {
  //   let tempArray = value.map(function (obj) {
  //     return obj._id;
  //   });
  //   setSelectedOptions(tempArray);
  // };

  //set syllabus
  useEffect(() => {
    setValue("syllabus", syllabus); // eslint-disable-next-line
  }, [syllabus]);

  //set subject
  useEffect(() => {
    setValue("subject", subject); // eslint-disable-next-line
  }, [subject]);

  //set tutor
  useEffect(() => {
    // let temp = selectedOptions.map((str) => ({ id: str }));
    // setValue("tutor", temp); // eslint-disable-next-line
  }, [selectedOptions]);

  return (
    <form className="course-detail" onSubmit={handleSubmit(onSubmit)}>
      <div className="course-detail__header">
        <div className="course-detail__title">COURSE DETAIL</div>
        <div className="course-detail__button">
          <Button isWhite type="button" onClick={() => history.goBack()}>
            RETURN
          </Button>
          <Button marginLeft={16} type="submit">
            SAVE
          </Button>
        </div>
      </div>
      <div className="course-detail__input">
        <div className="course-detail__left">
          <Input
            label="Name"
            {...register("name", {
              required: {
                value: true,
                message: "Please input the course name",
              },
            })}
            error={errors.name && errors.name.message}
          />
          <Input
            label="Avatar"
            {...register("avatar", {
              required: { value: true, message: "Please input the avatar" },
            })}
            error={errors.avatar && errors.avatar.message}
          />
          <Input
            label="Price"
            {...register("price", {
              required: { value: true, message: "Please input the price" },
            })}
            error={errors.price && errors.price.message}
          />
          <Input
            label="Duration"
            {...register("duration", {
              required: { value: true, message: "Please input the duration" },
            })}
            error={errors.duration && errors.duration.message}
          />
          <Input label="Level" {...register("level")} />
          <Textarea label="Overview" {...register("overview")} />
        </div>
        <div className="course-detail__right">
          {/* <p style={{ fontWeight: "bold", marginBottom: 16, marginTop: 16 }}>
            Tutor
          </p>
          <Autocomplete
            multiple
            options={listAllTutor}
            getOptionLabel={(option: any) => option.name}
            // defaultValue={listAllTutor}
            style={{ width: "100%", marginBottom: 20 }}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                name="multiple"
                variant="outlined"
                fullWidth
              />
            )}
          /> */}
          <MultiInput
            label="Syllabus"
            onChange={(values) => {
              setSyllabus(values);
            }}
            values={oneCourse.syllabus}
            marginBottom={16}
          />
          <MultiInput
            label="Subject"
            onChange={(values) => {
              setSubject(values);
            }}
            values={oneCourse.subject}
            marginBottom={16}
          />
        </div>
      </div>
      <ModalLoader isShow={isLoading} />
    </form>
  );
};
