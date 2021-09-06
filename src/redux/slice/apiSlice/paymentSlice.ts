import {
  doAcceptPayment,
  doGetAllPayment,
  doRejectPayment,
} from "./../../asyncAction/payment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTnitialState = {
  listPayment: Array<IResPayment>;
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
  reducers: {
    doFakeSetPaymentStatus(
      state,
      action: PayloadAction<{ cid?: string; uid?: string; status?: number }>
    ) {
      const newList = state.listPayment.map((item, i) => {
        if (
          item.courseID === action.payload.cid &&
          item.userID === action.payload.uid
        ) {
          return {
            ...item,
            status: action.payload.status,
          };
        }
        return item;
      });
      state.listPayment = newList;
    },
  },
  extraReducers: (builder) => {
    //get all tutors
    builder.addCase(doGetAllPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetAllPayment.fulfilled,
      (state, action: PayloadAction<IResListPayment>) => {
        state.listPayment = action.payload.result;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetAllPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //get all tutors
    builder.addCase(doAcceptPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doAcceptPayment.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doAcceptPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //get all tutors
    builder.addCase(doRejectPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doRejectPayment.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doRejectPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer, actions } = paymentSlice;
export const { doFakeSetPaymentStatus } = actions;
export default reducer;
