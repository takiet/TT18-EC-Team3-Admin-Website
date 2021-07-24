import axiosAuth from "./axiosAuth";

export const apiAuth = {
  login: (params: IParamsLogin) => {
    const url = "admin/log-in";
    
    return axiosAuth.post(url, params);
  },
};
