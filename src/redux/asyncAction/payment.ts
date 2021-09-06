import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPayment } from "../../services/aixos";

export const doGetAllPayment = createAsyncThunk(
  "payment@get-all",
  async (params: { status?: string }) => {
    const result = await apiPayment.getAllPayment(params);
    return result.data;
  }
);

export const doAcceptPayment = createAsyncThunk(
  "payment@accept",
  async (params: { uid?: string; cid?: string }) => {
    const result = await apiPayment.acceptPayment(params);
    return result.data;
  }
);

export const doRejectPayment = createAsyncThunk(
  "payment@reject",
  async (params: { uid?: string; cid?: string }) => {
    const result = await apiPayment.rejectPayment(params);
    return result.data;
  }
);
