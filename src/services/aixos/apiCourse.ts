import axiosCommon from "./axiosCommon";

const baseURL = "course/";

export const apiCourse = {
  getAllListCourse: () => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url);
  },
  getOneCourse: (params: { uid: string }) => {
    const url = baseURL + "get-one";
    return axiosCommon.get(url + "?uid=" + params.uid);
  },
  addCourse: (params: any) => {
    const url = "admin/course/add";
    return axiosCommon.post(url, params);
  },
  updateCourse: (params: IParamsUpdateCourse) => {
    const url = "admin/course/update";
    return axiosCommon.post(url, params);
  },
};
