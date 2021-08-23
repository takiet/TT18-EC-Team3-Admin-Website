import { objToQuery } from "../../helpers/common";
import axiosCommon from "./axiosCommon";

const baseURL = "course/";

export const apiCourse = {
  getAllListCourse: () => {
    const url = baseURL + "get-all";
    console.log(url);
    return axiosCommon.get(url);
  },
  getOneCourse: (params: { uid: string }) => {
    const url = baseURL + "get-one";
    return axiosCommon.get(url + objToQuery(params));
  },
};
