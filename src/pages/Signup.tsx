import React from "react";
import AuthenticationLayout from "../components/authentication/AuthenticationLayout";

function Signup() {
  const onSubmit = () => {
    console.log("press submit");
  };

  return (
    <AuthenticationLayout title="Signup" confirmPassword onSubmit={onSubmit} />
  );
}

export default Signup;
