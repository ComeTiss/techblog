import React from "react";
import AuthenticationLayout, {
  AuthenticationData
} from "../components/authentication/AuthenticationLayout";
import { SIGNUP } from "../service/apollo/mutations";
import { useMutation } from "@apollo/react-hooks";

function Signup() {
  const [signup] = useMutation(SIGNUP);

  const onSubmit = (data: AuthenticationData) => {
    const { email, password } = data;
    signup({
      variables: { request: { email, password } }
    });
  };

  return (
    <AuthenticationLayout title="Signup" confirmPassword onSubmit={onSubmit} />
  );
}

export default Signup;
