import axiosCommon from "./axiosCommon";

const baseURL = "admin/voucher/";

export const apiVoucher = {
  getAllVoucher: () => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url);
  },
  //   getOneTutor: (params: { uid: string }) => {
  //     const url = baseURL + "get-one";
  //     return axiosCommon.get(url + "?uid=" + params.uid);
  //   },
  addVoucher: (params: any) => {
    const url = baseURL + "add";
    return axiosCommon.post(url, params);
  },
  updateVoucher: (params: IParamsUpdateVoucher) => {
    const url = baseURL + "update";
    return axiosCommon.post(url, params);
  },
};
