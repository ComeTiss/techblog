import React, { useState } from "react";
import FacebookAuth from "../components/authentication/FacebookAuth";
import GoogleAuth from "../components/authentication/GoogleAuth";
import { makeStyles, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(() => ({
  loginPage__button: {
    display: "block",
    marginBottom: "24px"
  },
  loginPage__buttonsContainer: {
    marginTop: "40px",
    textAlign: "center"
  },
  loginPage__title: {
    marginBottom: "40px"
  }
}));

function Login() {
  const styles = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const onLoginFailure = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect to={"/"} />
      ) : (
        <div className={styles.loginPage__buttonsContainer}>
          <div className={styles.loginPage__title}>
            <Typography variant="h4">User Authentication</Typography>
          </div>
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
      )}
    </>
  );
}

export default Login;
