import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { PaymentRow } from "../../components/PaymentRow/PaymentRow";
import { doGetAllPayment } from "../../redux/asyncAction/payment";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Payment.scss";

export const Payment: React.FC = () => {
  const dispatch = useAppDispatch();

  const allPayment = useSelector(
    (state: RootState) => state.paymentSlice.listPayment
  );

  useEffect(() => {
    dispatch(doGetAllPayment());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <div className="payment-table">
        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "960px" }}>
              <thead>
                <tr>
                  <th className="payment-table__no-order">#</th>
                  <th className="payment-table__name">User</th>
                  <th className="payment-table__name">Payment</th>
                  <th className="payment-table__name">Course</th>
                  <th className="payment-table__amount">Amount</th>
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
                      // email={item.email}
                      // phone={item.phone}
                      // avatar={item.avatar}
                      // onClick={() => history.push(`/tutor-detail/${item._id}`)}
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
