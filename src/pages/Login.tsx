import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../service/apollo/mutations";
import { useCookies } from "react-cookie";
import Navigation from "../components/routes/Navigation";
import { AuthProvider } from "../service/models/user.model";

function Login() {
  const [login] = useMutation(LOGIN);
  const [cookies, setCookies] = useCookies();
  const onSubmit = (data: AuthenticationData) => {
    const { email, password, authProvider } = data;

    return Promise.resolve(
      login({
        variables: { request: { email, password, authProvider } }
      }).then(response => {
        setCookies("userId", response?.data?.login?.user?.id);
        if (!data.authProvider) {
          setCookies("token", response?.data?.login?.token);
        }
      })
    );
  };

  return (
    <>
      <Navigation linkPath="/signup" linkTitle="Sign Up" />
      <AuthenticationLayout
        title="Login"
        confirmPassword={false}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Login;
