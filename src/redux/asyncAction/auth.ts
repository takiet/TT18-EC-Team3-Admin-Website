import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuth } from "../../services/aixos";

export const doLogin = createAsyncThunk(
  "auth@post/Login",
  async (params: IParamsLogin) => {
    const result = await apiAuth.login(params);
    return result.data;
  }
);
