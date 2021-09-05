import {
  doGetAllVoucher,
  doAddVoucher,
  doUpdateVoucher,
  doDeleteVoucher,
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
  reducers: {
    doFakeDeleteVoucher(state, action: PayloadAction<{ _id?: string }>) {
      const remove = state.listAllVoucher.filter((item) => {
        if (item._id === action.payload._id) {
          return false;
        }
        return true;
      });
      state.listAllVoucher = remove;
    },
  },
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
    //update tutor
    builder.addCase(doDeleteVoucher.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doDeleteVoucher.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doDeleteVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer, actions } = voucherSlice;
export const { doFakeDeleteVoucher } = actions;
export default reducer;
