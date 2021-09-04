import {
  doAddTutor,
  doGetOneTutor,
  doUpdateTutor,
} from "./../../asyncAction/tutor";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doGetAllListTutor } from "../../asyncAction";

type TTnitialState = {
  listAllTutor: Array<IResTutor>;
  tutor: IResOneTutor;
  isLoading: boolean;
  err: any;
};

const initialState = {
  listAllTutor: [],
  tutor: {},
  isLoading: false,
  err: {},
} as TTnitialState;

export const slice = createSlice({
  name: "tutor@",
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
    //get one tutor
    builder.addCase(doGetOneTutor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetOneTutor.fulfilled,
      (state, action: PayloadAction<IResGetOneTutor>) => {
        state.tutor = action.payload.tutor;
        state.isLoading = false;
      }
    );
    builder.addCase(doGetOneTutor.rejected, (state, action) => {
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
    //update tutor
    builder.addCase(doUpdateTutor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doUpdateTutor.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(doUpdateTutor.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = slice;
export default reducer;
