import axiosCommon from "./axiosCommon";

const baseURL = "payment/admin/";

export const apiPayment = {
  getAllPayment: () => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url);
  },
};
