import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
  Avatar
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { AuthenticationData } from "./AuthenticationLayout";

type Props = {
  title: string;
  confirmPassword: boolean;
  onClickSubmit: (data: AuthenticationData) => void;
  submitError: string;
};

const useStyles = makeStyles(() => ({
  manualAuth__textInput: {
    display: "block",
    marginTop: 40,
    marginBottom: 20
  },
  manualAuth__submitBtn: {
    display: "block",
    marginTop: 40
  },
  manualAuth__avatar: {
    margin: "auto",
    marginBottom: 8
  },
  manualAuth__confirmPwd: {
    marginTop: 20
  },
  manualAuth_errorMsg: {
    marginTop: 8,
    color: "red",
    fontWeight: "bold",
    whiteSpace: "pre-line"
  }
}));

function ManualAuth(props: Props) {
  const { submitError, title, confirmPassword, onClickSubmit } = props;
  const styles = useStyles();
  const [inputData, setInputData] = useState<AuthenticationData>({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const onChangeData = (field: string, e: any) => {
    const newData = { ...inputData };
    // @ts-ignore
    newData[field] = e.target.value;
    setInputData(newData);
  };

  return (
    <div>
      <CssBaseline />
      <Avatar className={styles.manualAuth__avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">{title}</Typography>
      <form>
        <div className={styles.manualAuth__textInput}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email-input"
            label="Email adress"
            placeholder="Email adress"
            onChange={(e: any) => onChangeData("email", e)}
          />
        </div>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="password-input"
          label="Password"
          placeholder="Password"
          onChange={(e: any) => onChangeData("password", e)}
        />
        {confirmPassword && (
          <div className={styles.manualAuth__confirmPwd}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password-confirm-input"
              label="Confirm password"
              placeholder="Confirmation"
              onChange={(e: any) => onChangeData("passwordConfirm", e)}
            />
          </div>
        )}
        {submitError && !!submitError.trim() && (
          <Typography
            variant="subtitle1"
            className={styles.manualAuth_errorMsg}
          >
            {submitError}
          </Typography>
        )}
        <div className={styles.manualAuth__submitBtn}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={() => onClickSubmit(inputData)}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ManualAuth;
