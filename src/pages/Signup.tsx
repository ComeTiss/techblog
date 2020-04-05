import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { signup } from "../service/rest/apis";
import { useCookies } from "react-cookie";
import Navigation from "../components/routes/Navigation";

function Signup() {
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmit = (data: AuthenticationData) => {
    const { email, password } = data;
    return Promise.resolve(
      signup({ email, password }).then(response => {
        setCookies("userId", response?.data?.user?.id);
        setCookies("token", response?.data?.token);
      })
    );
  };

  return (
    <>
      <Navigation linkPath="/login" linkTitle="Login" />
      <AuthenticationLayout
        title="Signup"
        confirmPassword
        onSubmit={onSubmit}
      />
    </>
  );
}

export default Signup;
