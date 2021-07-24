import "./Login.scss";
import { Button, Input } from "../../components/common";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/store";
import { doLogin } from "../../redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { EToken } from "../../constants";

type FormValues = {
  username: string;
  password: string;
};
export const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    dispatch(doLogin(data))
      .then(unwrapResult)
      .then((res: IResLogin) => {
        if (res) {
          const token = res.access;
          window.localStorage.setItem(EToken.loginToken, token);
          window.location.replace("/");
        }
      });
  };

  return (
    <div className="login">
      <div className="login__image">
        <img
          src="https://www.cambly.com/fe/static/login_illustration_big.png"
          alt="signupimage"
        />
      </div>
      <form className="login__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <h3>Welcome back to Amitu!</h3>
          <Input placeholder="Username" {...register("username")} />
          <Input placeholder="Password" {...register("password")} />
          <Button width="100%" marginBottom={20} type="submit">
            Login
          </Button>
          <p>username: admin, password: abcd_4321</p>
        </div>
      </form>
    </div>
  );
};
