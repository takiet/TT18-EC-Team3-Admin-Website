import axiosCommon from "./axiosCommon";

const baseURL = "tutor/";

export const apiTutor = {
  getAllListTutor: () => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url);
  },
  getOneTutor: (params: { uid: string }) => {
    const url = baseURL + "get-one";
    return axiosCommon.get(url + "?uid=" + params.uid);
  },
  addTutor: (params: any) => {
    const url = "admin/tutor/add";
    return axiosCommon.post(url, params);
  },
};
