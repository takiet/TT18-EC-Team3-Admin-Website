import axios, { AxiosError, AxiosResponse } from "axios";
import { EToken } from "../../constants";
import { logout } from "../../helpers";

const baseURL = process.env.REACT_APP_BACKEND_SERVER;
const token = localStorage.getItem(EToken.loginToken);

const axiosCommon = axios.create({
  baseURL: baseURL + "api/",
  headers: {
    "content-type": "application/json; charset=utf-8",
    Authorization: token,
  },
});
axiosCommon.interceptors.response.use(
  (res: AxiosResponse<{ content: any; message: string; result: number }>) => {
    // if (res.data.result === 0) {
    //   alert('Đã có lỗi hệ thống xảy ra');
    // }
    return res;
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      logout();
    }
    throw err;
  }
);
export default axiosCommon;
