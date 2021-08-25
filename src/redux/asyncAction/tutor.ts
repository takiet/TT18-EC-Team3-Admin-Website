import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiTutor } from "../../services/aixos";

export const doGetAllListTutor = createAsyncThunk("tutor@get-all", async () => {
  const result = await apiTutor.getAllListTutor();
  return result.data;
});

export const doGetOneTutor = createAsyncThunk(
  "tutor@getOne",
  async (params: { uid: string }) => {
    const result = await apiTutor.getOneTutor(params);
    return result.data;
  }
);

export const doAddTutor = createAsyncThunk("tutor@add", async (params: any) => {
  const result = await apiTutor.addTutor(params);
  return result.data;
});

export const doUpdateTutor = createAsyncThunk(
  "tutor@update",
  async (params: IParamsUpdateTutor) => {
    const result = await apiTutor.updateTutor(params);
    return result.data;
  }
);