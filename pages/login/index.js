import React, { useState } from "react";
import classes from "./index.module.css";

import TextField from "@mui/material/TextField";
import Banner from "../../components/layout/Banner";
import Button, { GreenButton } from "../../components/UI/Button";

const Login = () => {
  return (
    <div className={classes.inputContainer}>
      <TextField
        id="standard-basic"
        label="帳號"
        variant="standard"
        required
        color="success"
        type="email"
        margin="normal"
        fullWidth
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
      />
    </div>
  );
};

const Register = () => {
  return (
    <div className={classes.inputContainer}>
      <TextField
        id="standard-basic"
        label="帳號"
        variant="standard"
        required
        color="success"
        type="text"
        margin="normal"
        fullWidth
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
      />
      <TextField
        id="standard-basic"
        label="確認密碼"
        variant="standard"
        required
        color="success"
        type="password"
        margin="normal"
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        required
        color="success"
        type="email"
        margin="normal"
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="手機"
        variant="standard"
        required
        color="success"
        type="number"
        margin="normal"
        fullWidth
      />
    </div>
  );
};

const index = () => {
  const [isLoginForm, setLoginForm] = useState(true);
  return (
    <div className={classes.container}>
      <Banner title="登入及註冊" />
      <div className={classes.wrapper}>
        <div className={classes.loginContainer}>
          <div className={classes.header}>
            <a className={classes.link}>登入</a>
            <span>|</span>
            <a className={classes.link}>註冊</a>
          </div>
          <form className={classes.form}>
            {/* <Login />
            <Button title="登入" /> */}
            <Register />
            <GreenButton title="註冊" />
          </form>
          <div className={classes.buttonContainer}>
            <a className={classes.forgetPassword}>忘記密碼？</a>
            <h6 className={classes.loginHorizontal}>
              <span>或者</span>
            </h6>
            <div className={classes.googleLogin}>
              <img src="https://img.icons8.com/fluency/15/000000/google-logo.png" />
              <span>google 帳號登入</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
