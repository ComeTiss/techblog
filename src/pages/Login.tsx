import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../service/apollo/mutations";
import { useCookies } from "react-cookie";

function Login() {
  const [login] = useMutation(LOGIN);
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmit = (data: AuthenticationData) => {
    const { email, password } = data;
    return Promise.resolve(
      login({
        variables: { request: { email, password } }
      }).then(response => {
        setCookies("token", response?.data?.login?.token);
      })
    );
  };

  return (
    <AuthenticationLayout
      title="Login"
      confirmPassword={false}
      onSubmit={onSubmit}
    />
  );
}

export default Login;
