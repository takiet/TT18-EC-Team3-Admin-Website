import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "../slice/appSlice/modalSlice";
import auth from "../slice/apiSlice/authSlice";
import tutorSlice from "../slice/apiSlice/tutorSlice";
import courseSlice from "./../slice/apiSlice/courseSlice";

export const rootReducer = combineReducers({
  modalSlice,
  auth,
  tutorSlice,
  courseSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
