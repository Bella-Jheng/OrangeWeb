import React from "react";
import TextField from "@mui/material/TextField";

const Login = (props) => {
  const {
    enterEmail,
    enterEmailIsInvalid,
    emailChangeHandler,
    emailBlurHandler,
    enterPassword,
    enterPasswordIsInvalid,
    passwordChangeHandler,
    passwordBlurHandler,
  } = props;

  return (
    <>
      <TextField
        id="standard-basic"
        label="Email 帳號"
        variant="standard"
        required
        color="success"
        type="email"
        margin="normal"
        fullWidth
        error={enterEmailIsInvalid}
        helperText={enterEmailIsInvalid ? "Email格式不正確" : ""}
        value={enterEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      <TextField
        id="standard-basic"
        label="密碼"
        variant="standard"
        required
        color="success"
        type="password"
        margin="normal"
        fullWidth
        error={enterPasswordIsInvalid}
        helperText={enterPasswordIsInvalid ? "密碼格式不正確" : ""}
        value={enterPassword}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
    </>
  );
};

export default Login;
