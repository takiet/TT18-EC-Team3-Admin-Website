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
  updateTutor: (params: IParamsUpdateTutor) => {
    const url = "admin/tutor/update";
    return axiosCommon.post(url, params);
  },
  deleteTutor: (params: { uid: string }) => {
    const url = "admin/tutor/delete-one";
    return axiosCommon.post(url, params);
  },
};
