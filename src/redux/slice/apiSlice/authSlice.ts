import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doLogin } from "../../asyncAction";

type TTnitialState = {
  isLoading: boolean;
  // dataLogin: IResUser;
  err: any;
};

const initialState = {
  isLoading: false,
  // dataLogin: {},
  err: {},
} as TTnitialState;

export const authSlice = createSlice({
  name: "auth@",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      doLogin.fulfilled,
      (state, action: PayloadAction<IResLogin>) => {
        // const content = action.payload.content;
        // if (content) state.dataLogin = content.user;
        state.isLoading = false;
      }
    );
    builder.addCase(doLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

const { reducer } = authSlice;
export default reducer;
