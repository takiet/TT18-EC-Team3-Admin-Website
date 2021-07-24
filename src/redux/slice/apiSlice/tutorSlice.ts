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
  },
});

const { reducer } = slice;
export default reducer;
