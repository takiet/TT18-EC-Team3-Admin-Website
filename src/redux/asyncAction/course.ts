import { apiCourse } from "./../../services/aixos/apiCourse";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const doGetAllListCourse = createAsyncThunk(
  "course@getAll",
  async () => {
    const result = await apiCourse.getAllListCourse();
    return result.data;
  }
);

export const doGetOneCourse = createAsyncThunk(
  "course@getOne",
  async (params: { uid: string }) => {
    const result = await apiCourse.getOneCourse(params);
    return result.data;
  }
);

export const doAddCourse = createAsyncThunk(
  "course@add",
  async (params: IParamsUpdateCourse) => {
    const result = await apiCourse.addCourse(params);
    return result.data;
  }
);

export const doUpdateCourse = createAsyncThunk(
  "course@update",
  async (params: IParamsUpdateCourse) => {
    const result = await apiCourse.updateCourse(params);
    return result.data;
  }
);
