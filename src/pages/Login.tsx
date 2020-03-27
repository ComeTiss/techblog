import React from "react";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";

function Login() {
  const onSubmit = () => {
    console.log("press submit");
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
