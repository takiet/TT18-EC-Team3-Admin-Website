import { doAddTutor } from "./../../asyncAction/tutor";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetAllListTutor } from "../../asyncAction";

type TTnitialState = {
  listAllTutor: Array<IResTutor>;
  isLoading: boolean;
  err: any;
};

const initialState = {
  listAllTutor: [],
  isLoading: false,
  err: {},
} as TTnitialState;

export const slice = createSlice({
  name: "budget@",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all tutors
    builder.addCase(doGetAllListTutor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetAllListTutor.fulfilled,
      (state, action: PayloadAction<IResGetListAllTutor>) => {
        state.listAllTutor = action.payload.result;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetAllListTutor.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
    //add tutor
    builder.addCase(doAddTutor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doAddTutor.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doAddTutor.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = slice;
export default reducer;
