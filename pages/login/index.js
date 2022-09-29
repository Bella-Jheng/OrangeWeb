import React, { useState } from "react";
import classes from "./index.module.css";

import Banner from "../../components/layout/Banner";
import Button, { GreenButton } from "../../components/UI/Button";
import Login from "../../components/login/Login";
import Register from "../../components/login/Register";

const index = () => {
  const [isLoginForm, setLoginForm] = useState(true);

  const switchLoginForm = ()=>{
    setLoginForm(true)
  }

  const switchRegisterForm = ()=>{
    setLoginForm(false)
  }

  const LoginPart =<><Login /> <Button title="登入" /> </>
  const RegisterPart =<><Register /><GreenButton title="註冊" /></>
  return (
    <div className={classes.container}>
      <Banner title="登入及註冊" />
      <div className={classes.wrapper}>
        <div className={classes.loginContainer}>
          <div className={classes.header}>
            <a className={`${classes.link}` + " " + `${isLoginForm && classes.visited}`} onClick={switchLoginForm}>登入</a>
            <span>|</span>
            <a className={`${classes.link}` + " " + `${!isLoginForm && classes.visited}`} onClick={switchRegisterForm}>註冊</a>
          </div>
          <form className={classes.form}>
            <div className={classes.inputContainer}>
              {isLoginForm?LoginPart:RegisterPart}
            </div>
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
