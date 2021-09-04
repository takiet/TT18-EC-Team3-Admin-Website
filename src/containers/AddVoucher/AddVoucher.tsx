import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button, Input } from "../../components/common";
import { doAddVoucher } from "../../redux/asyncAction/voucher";
import { useAppDispatch } from "../../redux/store";
import "./AddVoucher.scss";

type FormValues = {
  code: string;
  from: Date;
  to: Date;
  discount: number;
  type: boolean;
};
export const AddVoucher: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    setValue("type", true);
    console.log(data);
    dispatch(doAddVoucher(data));
  };

  //init
  useEffect(() => {
    setValue("type", true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className="add-voucher" onSubmit={handleSubmit(onSubmit)}>
      <div className="add-voucher__header">
        <div className="add-voucher__title">ADD VOUCHER</div>
        <div className="add-voucher__button">
          <Button isWhite type="button" onClick={() => history.goBack()}>
            RETURN
          </Button>
          <Button marginLeft={16} type="submit">
            ADD
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
              // validate: (value) => {
              //   const to = value;
              //   const from = watch("from");
              //   if (+to <= +from) return "hihi";
              // },
            })}
            error={errors.to && errors.to.message}
            type="date"
          />
        </div>
      </div>
    </form>
  );
};
