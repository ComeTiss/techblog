import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { login } from "../service/rest/apis";
import { useCookies } from "react-cookie";
import Navigation from "../components/routes/Navigation";
import { AuthProvider } from "../service/models/user.model";

function Login() {
  const [cookies, setCookies] = useCookies();
  const onSubmit = (data: AuthenticationData) => {
    const { email, password, authProvider } = data;

    return Promise.resolve(login({ email, password, authProvider })).then(
      response => {
        setCookies("userId", response?.data?.user?.id);
        if (!data.authProvider) {
          setCookies("token", response?.data?.token);
        }
      }
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
