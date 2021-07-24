import axios, { AxiosError, AxiosResponse } from "axios";
import { EToken } from "../../constants";

const baseURL = process.env.REACT_APP_BACKEND_SERVER;
// const baseURL = "https://amitu-backend.herokuapp.com/";
const token = localStorage.getItem(EToken.loginToken);
// import { logout } from "../../helpers/common";

const axiosFile = axios.create({
  baseURL: baseURL + "api/",
  headers: {
    "content-type": "application/json",
    // Authorization: token,
  },
  responseType: "arraybuffer",
});
axiosFile.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data === 0) {
      alert("Đã có lỗi hệ thống xảy ra");
    }
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      // logout();
    }
    throw err;
  }
);
export default axiosFile;
