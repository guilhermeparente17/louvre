import styled from "styled-components";

type ContainerProps = {
  bgImage?: any;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

export const ContainerLogin = styled.div`
  position: absolute;
  z-index: 1;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #d0cac6;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 175px;
  padding-left: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1330px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const LoginTitle = styled.h3`
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 45px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const ForgottenPass = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

export const CreateAccount = styled.div`
  width: 72%;
  margin-bottom: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1330px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentLogin = styled.div`
    max-width: 80%;

    @media screen and (max-width: 1330px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
`;

export const Text = styled.span`
  font-size: 18px;
  color: #fff;
  text-decoration: underline;

  @media screen and (max-width: 1330px) {
    margin-bottom: 0px;
  }
`;

export const EffectBack = styled.div`
    width: 80%;
  height: 80%;
  background-color: #fff;
  opacity: 0.3;
  position: relative;
  z-index: 1;
  filter: blur(5px);

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
