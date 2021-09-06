import { Checkbox } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Input, Label, ModalLoader } from "../../components/common";
import { doUpdateVoucher } from "../../redux/asyncAction/voucher";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import "./VoucherDetail.scss";

type FormValues = {
  code: string;
  from: Date;
  to: Date;
  discount: number;
  type: boolean;
};

export const VoucherDetail: React.FC = () => {
  const history = useHistory();
  const isLoading = useSelector(
    (state: RootState) => state.voucherSlice.isLoading
  );
  const [checked, setChecked] = useState(true);

  const { state } = useLocation<{
    _id: string;
    code: string;
    from: Date;
    to: Date;
    discount: number;
    type: boolean;
  }>();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    setValue("type", checked);
    dispatch(doUpdateVoucher({ vid: state?._id, value: data }))
      .then(unwrapResult)
      .then((res: any) => {
        if (res) if (res.message === "Success") history.goBack();
      });
  };

  useEffect(() => {
    setChecked(state?.type);
    // eslint-disable-next-line
  }, [state?.type]);

  //init
  useEffect(() => {
    reset({
      code: state?.code,
      from: moment(state?.from).format("YYYY-MM-DD"),
      to: moment(state?.to).format("YYYY-MM-DD"),
      discount: state?.discount,
      type: state?.type,
    });
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className="add-voucher" onSubmit={handleSubmit(onSubmit)}>
      <div className="add-voucher__header">
        <div className="add-voucher__title">VOUCHER DETAIL</div>
        <div className="add-voucher__button">
          <Button isWhite type="button" onClick={() => history.goBack()}>
            RETURN
          </Button>
          <Button marginLeft={16} type="submit">
            SAVE
          </Button>
        </div>
      </div>
      <div className="add-voucher__input">
        <div className="add-voucher__left">
          <Input
            label="Code"
            {...register("code", {
              required: {
                value: true,
                message: "Please input the code",
              },
            })}
            error={errors.code && errors.code.message}
          />
          <Input
            label="Discount"
            {...register("discount", {
              required: {
                value: true,
                message: "Please input the discount amount",
              },
            })}
            error={errors.discount && errors.discount.message}
          />
          <div style={{ display: "flex" }}>
            {checked ? (
              <Label title="TYPE ~ AMOUNT" />
            ) : (
              <Label title="TYPE ~ PERCENTAGE" />
            )}
            <Checkbox
              defaultChecked={state?.type}
              onChange={(event: any) => {
                setChecked(event.target.checked);
                setValue("type", event.target.checked);
              }}
            />
          </div>
        </div>
        <div className="add-voucher__right">
          <Input
            label="From"
            {...register("from", {
              // required: {
              //   value: true,
              //   message: "Please input the start time of the voucher",
              // },
            })}
            error={errors.from && errors.from.message}
            type="date"
          />
          <Input
            label="To"
            {...register("to", {
              // required: {
              //   value: true,
              //   message: "Please input the end time of the voucher",
              // },
            })}
            error={errors.to && errors.to.message}
            type="date"
            defaultValue={getValues("to")}
          />
        </div>
      </div>
      <ModalLoader isShow={isLoading} />
    </form>
  );
};
