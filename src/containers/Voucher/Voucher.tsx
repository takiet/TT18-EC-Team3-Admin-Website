import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { VoucherRow } from "../../components";
import { Button } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { doGetAllVoucher } from "../../redux/asyncAction/voucher";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Voucher.scss";

export const Voucher: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const listAllVoucher = useSelector(
    (state: RootState) => state.voucherSlice.listAllVoucher
  );

  useEffect(() => {
    dispatch(doGetAllVoucher());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <Button
        type="submit"
        marginBottom={16}
        onClick={() => history.push("/add-course")}
      >
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
                      onClick={() => {
                        history.push(`/course-detail/${item._id}`);
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
      </div>
    </div>
  );
};
