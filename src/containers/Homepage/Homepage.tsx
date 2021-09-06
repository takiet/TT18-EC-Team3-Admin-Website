import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ModalLoader } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { PaymentRow } from "../../components/PaymentRow/PaymentRow";
import { doGetAllPayment } from "../../redux/asyncAction/payment";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Homepage.scss";

export const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.paymentSlice.isLoading
  );
  const allPayment = useSelector(
    (state: RootState) => state.paymentSlice.listPayment
  );
  useEffect(() => {
    dispatch(doGetAllPayment({ status: "1" }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <div className="home-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "980px" }}>
              <thead>
                <tr>
                  <th className="home-table__no-order">#</th>
                  <th className="home-table__name">User</th>
                  <th className="home-table__name">Course</th>
                  <th className="home-table__name">Tutor</th>
                  <th className="home-table__amount">Amount</th>
                  {/* <th className="home-table__action">Status</th> */}
                </tr>
              </thead>

              <tbody>
                {allPayment.map((item, index) => {
                  return (
                    <PaymentRow
                      key={index}
                      index={index + 1}
                      username={item.user.name}
                      useravatar={item.user.avatar}
                      coursename={item.course.name}
                      courseavatar={item.course.avatar}
                      tutorname={item.tutor[0].name}
                      tutoravatar={item.tutor[0].avatar}
                      amount={item.total}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
      </div>
      <ModalLoader isShow={isLoading} />
    </div>
  );
};
