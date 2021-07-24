import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiTutor } from "../../services/aixos";

export const doGetAllListTutor = createAsyncThunk("", async () => {
  const result = await apiTutor.getAllListTutor();
  return result.data;
});
