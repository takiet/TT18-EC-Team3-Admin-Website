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
