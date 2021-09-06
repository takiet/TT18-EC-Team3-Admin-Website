import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { VoucherRow } from "../../components";
import { Button, ModalConfirm, ModalLoader } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doFakeDeleteVoucher } from "../../redux";
import {
  doDeleteVoucher,
  doGetAllVoucher,
} from "../../redux/asyncAction/voucher";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Voucher.scss";

export const Voucher: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const listAllVoucher = useSelector(
    (state: RootState) => state.voucherSlice.listAllVoucher
  );
  const isLoading = useSelector(
    (state: RootState) => state.voucherSlice.isLoading
  );
  const [isModalShown, setIsModalShown] = useState(false);
  const [message, setMessage] = useState("");
  const [voucherID, setVoucherID] = useState("");
  useEffect(() => {
    dispatch(doGetAllVoucher());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteVoucher = (voucherID?: string) => {
    dispatch(doDeleteVoucher({ vid: voucherID }))
      .then(unwrapResult)
      .then((res: any) => {
        if (res.message === "OK") {
          dispatch(doFakeDeleteVoucher({ _id: voucherID }));
          setIsModalShown(false);
        } else setIsModalShown(false);
      });
  };
  return (
    <div className="container">
      <Button marginBottom={16} onClick={() => history.push("/add-voucher")}>
        ADD
      </Button>
      <div className="voucher-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "1000px" }}>
              <thead>
                <tr>
                  <th className="voucher-table__no-order">#</th>
                  <th className="voucher-table__code">Code</th>
                  <th className="voucher-table__from">From</th>
                  <th className="voucher-table__to">To</th>
                  <th className="voucher-table__discount">Discount</th>
                  <th className="voucher-table__type">Type</th>
                  <th className="voucher-table__delete"></th>
                </tr>
              </thead>

              <tbody>
                {listAllVoucher.map((item, index) => {
                  return (
                    <VoucherRow
                      key={index}
                      index={index + 1}
                      code={item.code}
                      from={item.from}
                      to={item.to}
                      discount={item.discount}
                      type={item.type}
                      onClickDelete={() => {
                        setIsModalShown(true);
                        setVoucherID(item._id!);
                        setMessage(
                          `Are you sure you want to delete the voucher ${item.code}`
                        );
                      }}
                      onClick={() => {
                        history.push({
                          pathname: `/voucher-detail`,
                          state: {
                            _id: item._id,
                            code: item.code,
                            from: item.from,
                            to: item.to,
                            discount: item.discount,
                            type: item.type,
                          },
                        });
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
      </div>
      <ModalConfirm
        isShow={isModalShown}
        onClick={() => deleteVoucher(voucherID)}
        onClickClose={() => setIsModalShown(false)}
        message={message}
      />
      <ModalLoader isShow={isLoading} />
    </div>
  );
};
