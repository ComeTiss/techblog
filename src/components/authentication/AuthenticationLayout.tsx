import React, { useState } from "react";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";
import { makeStyles, Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import ManualAuth from "./ManualAuth";
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

type Props = {
  title: string;
  confirmPassword: boolean;
  onSubmit: () => void;
};

function Login(props: Props) {
  const { title, confirmPassword, onSubmit } = props;
  const styles = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onLoginSuccess = (data: any) => {
    console.log(data);
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
        <Container component="main" maxWidth="xs">
          <div className={styles.loginPage__mainContainer}>
            <ManualAuth
              title={title}
              confirmPassword={confirmPassword}
              onClickSubmit={onSubmit}
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
