import * as S from "./styled";
import Background from "../../assets/background.jfif";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const onSubmit = (data: any) => console.log(data);
  return (
    <S.Container bgImage={Background}>
      <S.EffectBack />
      <S.ContainerLogin>
        <S.Login>
          <S.ContentLogin>
            <S.LoginTitle>Sign In</S.LoginTitle>

            <S.FormLogin onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Email/Id"
                type="text"
                register={register("email")}
              />
              <Input
                label="Password"
                type="password"
                register={register("password")}
              />

              <S.ForgottenPass>Forgotten Password</S.ForgottenPass>

              <Button type="submit">Login Now</Button>
            </S.FormLogin>
          </S.ContentLogin>

          <S.CreateAccount>
            <S.Text>Don't have account yet?</S.Text>
            <Button>Create Account</Button>
          </S.CreateAccount>
        </S.Login>
        <S.Image src={Background} />
      </S.ContainerLogin>
    </S.Container>
  );
};

export default Login;
