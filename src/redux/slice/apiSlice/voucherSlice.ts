import {
  doGetAllVoucher,
  doAddVoucher,
  doUpdateVoucher,
} from "./../../asyncAction/voucher";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTnitialState = {
  listAllVoucher: Array<IResVoucher>;
  isLoading: boolean;
  err: any;
};

const initialState = {
  listAllVoucher: [],
  isLoading: false,
  err: {},
} as TTnitialState;

export const voucherSlice = createSlice({
  name: "voucher@",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all tutors
    builder.addCase(doGetAllVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetAllVoucher.fulfilled,
      (state, action: PayloadAction<IResGetListAllTutor>) => {
        state.listAllVoucher = action.payload.result;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetAllVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });

    //add tutor
    builder.addCase(doAddVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doAddVoucher.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doAddVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //update tutor
    builder.addCase(doUpdateVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doUpdateVoucher.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doUpdateVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = voucherSlice;
export default reducer;
