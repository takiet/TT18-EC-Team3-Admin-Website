import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, ModalConfirm } from "../../components/common";
import { ScrollHorizontal } from "../../components/common/ScrollHorizontal/ScrollHorizontal";
import { PaymentRow } from "../../components/PaymentRow/PaymentRow";
import { doFakeSetPaymentStatus } from "../../redux";
import {
  doAcceptPayment,
  doGetAllPayment,
  doRejectPayment,
} from "../../redux/asyncAction/payment";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./Payment.scss";

export const Payment: React.FC = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState("");
  const [isModalAcceptShown, setisModalAcceptShown] = useState(false);
  const [isModalRefundShown, setisModalRefundShown] = useState(false);
  const [courseID, setCourseID] = useState("");
  const [userID, setUserID] = useState("");
  const [paymentID, setPaymentID] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const allPayment = useSelector(
    (state: RootState) => state.paymentSlice.listPayment
  );
  const [token, setToken] = useState("");
  const PAYPAL_OAUTH_API = "https://api-m.sandbox.paypal.com/v1/oauth2/token/";
  const PAYPAL_PAYMENTS_API =
    "https://api-m.sandbox.paypal.com/v2/payments/captures/";
  const PAYPAL_CLIENT =
    "Ab4c2e4dP4reFRjMA9xjnC45LyuVbu0VUlj8nsg_unEtq-Sty_UN2jBL5X6KFbNNpvmTxrobn8Mo4jAk";
  const PAYPAL_SECRET =
    "ELKt4axp9m4v_0V00Q5I7xjw6O0Jc9GfyyUGaDJAvX0eYgfMmjz9aYiYx-G-Ger_oKJKSOZv5UojmdWT";
  useEffect(() => {
    const qs = require("qs");
    axios({
      method: "POST",
      url: PAYPAL_OAUTH_API,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Credentials": true,
      },
      data: qs.stringify({
        grant_type: "client_credentials",
      }),
      auth: {
        username: PAYPAL_CLIENT,
        password: PAYPAL_SECRET,
      },
    }).then((res) => {
      if (res) {
        setToken(res.data.access_token);
      }
    });
  }, []);

  useEffect(() => {
    dispatch(doGetAllPayment({ status: status }));
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  const refundPayment = (
    paymentID?: string,
    amount?: number,
    cid?: string,
    uid?: string
  ) => {
    axios({
      // eslint-disable-next-line
      url: PAYPAL_PAYMENTS_API + paymentID + "/refund",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        amount: {
          value: amount,
          currency_code: "USD",
        },
      },
    }).then((res: any) => {
      if (res.data.status === "COMPLETED") {
        dispatch(
          doRejectPayment({
            cid: cid,
            uid: uid,
          })
        )
          .then(unwrapResult)
          .then((res: any) => {
            if (res) {
              if (res.message === "Success") {
                dispatch(
                  doFakeSetPaymentStatus({
                    cid: cid,
                    uid: uid,
                    status: 2,
                  })
                );
                setisModalRefundShown(false);
              } else setisModalRefundShown(false);
            }
          });
      }
    });
  };

  const acceptPayment = (cid?: string, uid?: string) => {
    dispatch(
      doAcceptPayment({
        cid: cid,
        uid: uid,
      })
    )
      .then(unwrapResult)
      .then((res: any) => {
        if (res) {
          if (res.message === "Success") {
            dispatch(
              doFakeSetPaymentStatus({
                cid: cid,
                uid: uid,
                status: 1,
              })
            );
            setisModalAcceptShown(false);
          } else setisModalAcceptShown(false);
        }
      });
  };

  return (
    <div className="container">
      <div className="payment-table">
        <div className="payment-table__switch">
          <Button
            marginRight={16}
            isWhite={status === "" ? false : true}
            onClick={() => setStatus("")}
          >
            ALL
          </Button>
          <Button
            marginRight={16}
            isWhite={status === "0" ? false : true}
            onClick={() => setStatus("0")}
          >
            PENDING
          </Button>
          <Button
            marginRight={16}
            isWhite={status === "1" ? false : true}
            onClick={() => setStatus("1")}
          >
            ACCEPTED
          </Button>
          <Button
            marginRight={16}
            isWhite={status === "2" ? false : true}
            onClick={() => setStatus("2")}
          >
            REFUNDED
          </Button>
        </div>

        <ScrollHorizontal>
          <div className="table-responsive">
            <table style={{ width: "980px" }}>
              <thead>
                <tr>
                  <th className="payment-table__no-order">#</th>
                  <th className="payment-table__name">User</th>
                  <th className="payment-table__name">Course</th>
                  <th className="payment-table__name">Tutor</th>
                  <th className="payment-table__amount">Amount</th>
                  <th className="payment-table__action">Status</th>
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
                      status={item.status}
                      onClickAccept={() => {
                        setCourseID(item.courseID!);
                        setUserID(item.userID!);
                        setMessage(
                          `Are you sure you want to accept this payment?`
                        );
                        setisModalAcceptShown(true);
                      }}
                      onClickRefund={() => {
                        setCourseID(item.courseID!);
                        setUserID(item.userID!);
                        setPaymentID(item.email!);
                        setAmount(item.total!);
                        setMessage(
                          `Are you sure you want to refund this payment?`
                        );
                        setisModalRefundShown(true);
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollHorizontal>
        <ModalConfirm
          isShow={isModalAcceptShown}
          onClick={() => acceptPayment(courseID, userID)}
          onClickClose={() => setisModalAcceptShown(false)}
          message={message}
        />
        <ModalConfirm
          isShow={isModalRefundShown}
          onClick={() => refundPayment(paymentID, amount, courseID, userID)}
          onClickClose={() => setisModalRefundShown(false)}
          message={message}
        />
      </div>
    </div>
  );
};
