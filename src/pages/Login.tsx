import React, { useState } from "react";
import FacebookAuth from "../components/authentication/FacebookAuth";
import GoogleAuth from "../components/authentication/GoogleAuth";
import { makeStyles, Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import ManualAuth from "../components/authentication/ManualAuth";
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

function Login() {
  const styles = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLoginSuccess = (data: any) => {
    console.log(data);
    setIsLoggedIn(true);
  };

  const onLoginFailure = () => {
    setIsLoggedIn(false);
  };

  const onClickSubmit = () => {
    console.log("press submit");
  };

  return (
    <>
      {isLoggedIn ? (
        <Redirect to={"/"} />
      ) : (
        <Container component="main" maxWidth="xs">
          <div className={styles.loginPage__mainContainer}>
            <ManualAuth
              title={"Login"}
              confirmPassword={false}
              onClickSubmit={onClickSubmit}
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
