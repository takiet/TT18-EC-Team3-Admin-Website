import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  Input,
  MaskInput,
  MultiInput,
  Textarea,
} from "../../components/common";
import { doGetAllListCourse } from "../../redux";
import { useAppDispatch } from "../../redux/store";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import "./AddTutor.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const options = [];
type FormValues = {
  name: string;
  avatar: string;
  email: number;
  phone: number;
  address: number;
  gender: number;
  level: string;
  accent: string;
  noOngoingCourse: number;
  quote: string;
  overview: string;
  personality: string;
  exp: string;
  degree: Array<{ item: string }>;
  major: Array<{ item: string }>;
  course: Array<{ id: string }>;
  education: Array<{ item: string }>;
  DOB: string;
  available: Array<{ day: string; time: { start: string; end: string } }>;
};
export const AddTutor: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [major, setMajor] = useState([]);
  const [degree, setDegree] = useState([]);
  const [education, setEducation] = useState([]);
  const [gender, setGender] = useState({
    title: "",
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormValues>();
  const listAllCourse = useSelector(
    (state: RootState) => state.courseSlice.listAllCourse
  );
  const onSubmit = (data: any) => {
    // dispatch(doAddCourse(data))
    //   .then(unwrapResult)
    //   .then((result: any) => {
    //     if (result) {
    //       if (result.message === "Success") history.goBack();
    //     }
    //   });
    console.log(data);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  //handle change tutor array
  const handleChange = (event, value) => {
    let tempArray = value.map(function (obj) {
      return obj._id;
    });
    setSelectedOptions(tempArray);
  };

  //handle change gender
  const handleSelection = (event) => {
    const title = event.target.title;
    setGender({
      ...title,
      [title]: event.target.value,
    });
    setValue("gender", event.target.value);
  };

  //init
  useEffect(() => {
    dispatch(doGetAllListCourse());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //set major
  useEffect(() => {
    setValue("major", major); // eslint-disable-next-line
  }, [major]);

  //set degree
  useEffect(() => {
    setValue("degree", degree); // eslint-disable-next-line
  }, [degree]);

  //set education
  useEffect(() => {
    setValue("education", education); // eslint-disable-next-line
  }, [education]);

  //set tutor
  useEffect(() => {
    let temp = selectedOptions.map((str) => ({ id: str }));
    setValue("course", temp); // eslint-disable-next-line
  }, [selectedOptions]);

  return (
    <form className="course-detail" onSubmit={handleSubmit(onSubmit)}>
      <div className="course-detail__header">
        <div className="course-detail__title">TUTOR DETAIL</div>
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
                message: "Please input the tutor name",
              },
            })}
            error={errors.name && errors.name.message}
          />
          <FormControl variant="outlined" className="course-detail__gender">
            <p style={{ fontWeight: "bold", marginBottom: 16, marginTop: 16 }}>
              Gender
            </p>
            <Select
              native
              value={gender.title}
              onChange={handleSelection}
              inputProps={{
                title: "gender",
              }}
            >
              <option aria-label="None" value="" />
              <option value={0}>Male</option>
              <option value={1}>Female</option>
              <option value={2}>Not Specified</option>
            </Select>
          </FormControl>
          <Controller
            control={control}
            name="DOB"
            rules={{
              required: "Please input the birthday",
            }}
            render={({ field: { onChange, value, onBlur } }) => {
              return (
                <MaskInput
                  mask={[
                    /[0-9]/,
                    /[0-9]/,
                    "/",
                    /[0-9]/,
                    /[0-9]/,
                    "/",
                    /[0-9]/,
                    /[0-9]/,
                    /[0-9]/,
                    /[0-9]/,
                  ]}
                  onChange={(e) => {
                    setValue("DOB", e.target.value);
                  }}
                  value={value}
                  label="Date of birth"
                  onBlur={onBlur}
                  placeholder="DD/MM/YYYY"
                  paddingLeft={18}
                  paddingBottom={0}
                  error={errors.DOB && errors.DOB.message}
                />
              );
            }}
          />
          <Input
            label="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Please input the email",
              },
              pattern: {
                value: /\S+@\S+.\S+/,
                message: "The email number is invalid",
              },
            })}
            error={errors.email && errors.email.message}
          />
          <Input
            label="Phone Number"
            {...register("phone", {
              required: {
                value: true,
                message: "Please input the phone number",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "The phone number is invalid",
              },
            })}
            error={errors.phone && errors.phone.message}
          />
          <Input
            label="Avatar"
            {...register("avatar")}
            error={errors.avatar && errors.avatar.message}
          />
          <Input
            label="Address"
            {...register("address")}
            error={errors.address && errors.address.message}
          />
          <Input
            label="Accent"
            {...register("accent")}
            error={errors.accent && errors.accent.message}
          />
          <Textarea
            label="Quote"
            {...register("quote")}
            error={errors.avatar && errors.avatar.message}
          />
          <Textarea
            label="Experience"
            {...register("exp")}
            error={errors.quote && errors.quote.message}
          />
          <Textarea
            label="Personality"
            {...register("personality")}
            error={errors.personality && errors.personality.message}
          />
        </div>
        <div className="course-detail__right">
          <p style={{ fontWeight: "bold", marginBottom: 16, marginTop: 16 }}>
            Course
          </p>
          <Autocomplete
            multiple
            options={listAllCourse}
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
          <MultiInput
            label="Degree"
            onChange={(values) => {
              setDegree(values);
            }}
            values={options}
            marginBottom={16}
          />
          <MultiInput
            label="Education"
            onChange={(values) => {
              setEducation(values);
            }}
            values={options}
            marginBottom={16}
          />
          <MultiInput
            label="Major"
            onChange={(values) => {
              setMajor(values);
            }}
            values={options}
            marginBottom={16}
          />
        </div>
      </div>
    </form>
  );
};
