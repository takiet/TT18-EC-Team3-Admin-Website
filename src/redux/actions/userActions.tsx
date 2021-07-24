import axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

const baseURL = process.env.REACT_APP_BACKEND_SERVER;

//sign in
export const doLogin =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await axios.post(baseURL + "api/admin/log-in", {
        email,
        password,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("access", JSON.stringify(data.access));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
//log out
export const doLogOut = () => (dispatch: any) => {
  localStorage.removeItem("access");
  window.location.replace("/login");
  dispatch({ type: USER_SIGNOUT });
};
