import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiTutor } from "../../services/aixos";

export const doGetAllListTutor = createAsyncThunk("tutor@get-all", async () => {
  const result = await apiTutor.getAllListTutor();
  return result.data;
});

export const doAddTutor = createAsyncThunk(
  "tutor@add",
  async (params: any) => {
    const result = await apiTutor.addTutor(params);
    return result.data;
  }
);
