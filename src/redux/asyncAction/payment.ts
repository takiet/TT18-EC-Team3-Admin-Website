import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPayment } from "../../services/aixos";

export const doGetAllPayment = createAsyncThunk("payment@get-all", async () => {
  const result = await apiPayment.getAllPayment();
  return result.data;
});
