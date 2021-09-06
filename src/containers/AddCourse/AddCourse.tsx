import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  Input,
  ModalLoader,
  MultiInput,
  Textarea,
} from "../../components/common";
import { doAddCourse, doGetAllListTutor } from "../../redux";
import { useAppDispatch } from "../../redux/store";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./AddCourse.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { unwrapResult } from "@reduxjs/toolkit";

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
export const AddCourse: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const [syllabus, setSyllabus] = useState([]);
  const [subject, setSubject] = useState([]);
  const listAllTutor = useSelector(
    (state: RootState) => state.tutorSlice.listAllTutor
  );
  const isLoading = useSelector(
    (state: RootState) => state.courseSlice.isLoading
  );
  const onSubmit = (data: any) => {
    dispatch(doAddCourse(data))
      .then(unwrapResult)
      .then((result: any) => {
        if (result) {
          if (result.message === "Success") history.goBack();
        }
      });
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  //handle change tutor array
  const handleChange = (event, value) => {
    let tempArray = value.map(function (obj) {
      return obj._id;
    });
    setSelectedOptions(tempArray);
  };

  //init
  useEffect(() => {
    dispatch(doGetAllListTutor());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    let temp = selectedOptions.map((str) => ({ id: str }));
    setValue("tutor", temp); // eslint-disable-next-line
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
          <p style={{ fontWeight: "bold", marginBottom: 16, marginTop: 16 }}>
            Tutor
          </p>
          <Autocomplete
            multiple
            options={listAllTutor}
            getOptionLabel={(option: any) => option.name}
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
          />
          <p>{}</p>
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
        </div>
      </div>
      <ModalLoader isShow={isLoading} />
    </form>
  );
};
