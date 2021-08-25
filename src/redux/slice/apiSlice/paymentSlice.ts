import { doGetAllPayment } from "./../../asyncAction/payment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTnitialState = {
  listPayment: any;
  isLoading: boolean;
  err: any;
};

const initialState = {
  listPayment: [],
  isLoading: false,
  err: {},
} as TTnitialState;

export const paymentSlice = createSlice({
  name: "payment@",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all tutors
    builder.addCase(doGetAllPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetAllPayment.fulfilled,
      (state, action: PayloadAction<IResGetListAllTutor>) => {
        state.listPayment = action.payload.result;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetAllPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = paymentSlice;
export default reducer;
