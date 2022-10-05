import TextField from "@mui/material/TextField";

const Register = (props) => {
  const {
    enterName,
    enterNameIsInvalid,
    nameChangeHandler,
    nameBlurHandler,
    enterEmail,
    enterEmailIsInvalid,
    emailChangeHandler,
    emailBlurHandler,
    enterPassword,
    enterPasswordIsInvalid,
    passwordChangeHandler,
    passwordBlurHandler,
    enterPhone,
    enterPhoneIsInvalid,
    phoneChangeHandler,
    phoneBlurHandler,
  } = props;

  return (
    <>
      <TextField
        id="standard-basic"
        label="姓名"
        variant="standard"
        required
        color="success"
        type="text"
        margin="normal"
        fullWidth
        error={enterNameIsInvalid}
        helperText={enterNameIsInvalid ? "Email格式不正確" : ""}
        value={enterName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      <TextField
        id="standard-basic"
        label="Email 帳號"
        variant="standard"
        required
        color="success"
        type="text"
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

      <TextField
        id="standard-basic"
        label="手機"
        variant="standard"
        required
        color="success"
        type="text"
        margin="normal"
        fullWidth
        error={enterPhoneIsInvalid}
        helperText={enterPhoneIsInvalid ? "手機格式不正確" : ""}
        value={enterPhone}
        onChange={phoneChangeHandler}
        onBlur={phoneBlurHandler}
      />
    </>
  );
};

export default Register;
