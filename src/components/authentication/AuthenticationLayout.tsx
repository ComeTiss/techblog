import React, { useState } from "react";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";
import { makeStyles, Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import ManualAuth from "./ManualAuth";
import { ExecutionResult } from "graphql";
//import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  loginPage__button: {
    display: "block",
    marginBottom: "24px",
    marginTop: "40px"
  },
  loginPage__mainContainer: {
    marginTop: "40px",
    textAlign: "center"
  }
}));

export type AuthenticationData = {
  email: string;
  password: string;
  passwordConfirm?: string;
};

type Props = {
  title: string;
  confirmPassword: boolean;
  onSubmit: (data: AuthenticationData) => Promise<void | ExecutionResult<any>>;
};

function Login(props: Props) {
  const { title, confirmPassword, onSubmit } = props;
  const styles = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSubmitManualAuth = (data: AuthenticationData) => {
    if (!isEmailValid(data)) {
      setError("Invalid email format");
      return;
    }
    if (!isPasswordValid(data)) {
      setError("Invalid password confirmation");
      return;
    }
    onSubmit(data)
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(error => {
        const errorJSON = JSON.parse(JSON.stringify(error));
        setError(errorJSON?.networkError?.result?.message);
      });
  };

  const onLoginSuccess = (data: any) => {
    console.log(data);
    setIsLoggedIn(true);
  };

  const onLoginFailure = () => {
    setIsLoggedIn(false);
  };

  const isPasswordValid = (data: AuthenticationData) => {
    const { password, passwordConfirm } = data;
    return !passwordConfirm || password === passwordConfirm;
  };

  const isEmailValid = (data: AuthenticationData) => {
    const email = data.email.toLocaleLowerCase();
    return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
  }

  return (
    <>
      {isLoggedIn ? (
        <Redirect to={"/"} />
      ) : (
        <Container component="main" maxWidth="xs">
          <div className={styles.loginPage__mainContainer}>
            <ManualAuth
              submitError={error}
              title={title}
              confirmPassword={confirmPassword}
              onClickSubmit={onSubmitManualAuth}
            />
            <div className={styles.loginPage__button}>
              <FacebookAuth
                onLoginSuccess={onLoginSuccess}
                onLoginFailure={onLoginFailure}
              />
            </div>
            <GoogleAuth
              onLoginSuccess={onLoginSuccess}
              onLoginFailure={onLoginFailure}
            />
          </div>
        </Container>
      )}
    </>
  );
}

export default Login;
