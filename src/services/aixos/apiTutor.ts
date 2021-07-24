import axiosCommon from "./axiosCommon";

const baseURL = "tutor/";

export const apiTutor = {
  getAllListTutor: () => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url);
  },
};
