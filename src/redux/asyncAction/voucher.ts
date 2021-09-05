import { apiVoucher } from "./../../services/aixos/apiVoucher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const doGetAllVoucher = createAsyncThunk("voucher@getAll", async () => {
  const result = await apiVoucher.getAllVoucher();
  return result.data;
});

// export const doGetOneCourse = createAsyncThunk(
//   "course@getOne",
//   async (params: { uid: string }) => {
//     const result = await apiCourse.getOneCourse(params);
//     return result.data;
//   }
// );

export const doAddVoucher = createAsyncThunk(
  "voucher@add",
  async (params: any) => {
    const result = await apiVoucher.addVoucher(params);
    return result.data;
  }
);

export const doUpdateVoucher = createAsyncThunk(
  "voucher@update",
  async (params: IParamsUpdateVoucher) => {
    const result = await apiVoucher.updateVoucher(params);
    return result.data;
  }
);

export const doDeleteVoucher = createAsyncThunk(
  "voucher@delete",
  async (params: { vid?: string }) => {
    const result = await apiVoucher.deleteVoucher(params);
    return result.data;
  }
);
