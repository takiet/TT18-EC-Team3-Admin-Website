import { combineReducers } from "@reduxjs/toolkit";

import modalSlice from "../slice/appSlice/modalSlice";
import auth from "../slice/apiSlice/authSlice";

export const rootReducer = combineReducers({
  modalSlice,
  auth,
});
export type RootState = ReturnType<typeof rootReducer>;
