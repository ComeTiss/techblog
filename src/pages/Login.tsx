import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../service/apollo/mutations";

function Login() {
  const [login] = useMutation(LOGIN);

  const onSubmit = (data: AuthenticationData) => {
    const { email, password } = data;
    login({
      variables: { request: { email, password } }
    });
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
