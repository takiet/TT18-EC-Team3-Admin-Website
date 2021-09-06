import axiosCommon from "./axiosCommon";

const baseURL = "payment/admin/";

export const apiPayment = {
  getAllPayment: (params: { status?: string }) => {
    const url = baseURL + "get-all";
    return axiosCommon.get(url + "?status=" + params.status);
  },
  acceptPayment: (params: { uid?: string; cid?: string }) => {
    const url = "admin/payment/accept";
    return axiosCommon.post(url, params);
  },
  rejectPayment: (params: { uid?: string; cid?: string }) => {
    const url = "admin/payment/reject";
    return axiosCommon.post(url, params);
  },
};
