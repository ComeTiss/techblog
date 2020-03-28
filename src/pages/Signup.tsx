import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { SIGNUP } from "../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";
import { useCookies } from "react-cookie";

function Signup() {
  const [signup] = useMutation(SIGNUP);
  const [cookies, setCookies] = useCookies(["token"]);

  const onSubmit = (data: AuthenticationData) => {
    const { email, password } = data;
    return Promise.resolve(
      signup({
        variables: { request: { email, password } }
      }).then(response => {
        setCookies("token", response?.data?.signup?.token);
      })
    );
  };

  return (
    <AuthenticationLayout title="Signup" confirmPassword onSubmit={onSubmit} />
  );
}

export default Signup;
