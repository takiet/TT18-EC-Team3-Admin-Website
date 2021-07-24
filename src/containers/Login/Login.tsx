import "./Login.scss";
import { Button, Input } from "../../components/common";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

type FormValues = {
  email: string;
  password: string;
};
export const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues } = useForm<FormValues>();
  const token = localStorage.getItem("access");

  const onSubmit = (data: any) => {
    console.log(data);
    // dispatch(doLogin(getValues("email"), getValues("password")));
  };
  return (
    <div className="login">
      <form className="login__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form">
          <h3>Welcome back to Amitu!</h3>
          <p>Login with your email address</p>
          <Input placeholder="Email" {...register("email")} />
          <Input placeholder="Password" {...register("password")} />
          <Button width="100%" marginBottom={20} type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
