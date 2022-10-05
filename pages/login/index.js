import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import classes from "./index.module.css";

import Banner from "../../components/layout/Banner";
import Button, { GreenButton } from "../../components/UI/Button";
import Login from "../../components/login/Login";
import Register from "../../components/login/Register";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../store/auth-context";

const index = () => {
  const [isLoginForm, setLoginForm] = useState(true);
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest: sendRequest } = useHttp();
  const router = useRouter();

  const switchForm = () => {
    setLoginForm((prevState) => !prevState);
  };

  const {
    enterValue: name,
    hasError: nameHasError,
    onEnterValueChangeHandler: nameChangeHandler,
    onInputIsTouchedHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enterValue: email,
    hasError: emailHasError,
    onEnterValueChangeHandler: emailChangeHandler,
    onInputIsTouchedHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    const express =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return express.test(String(value).toLowerCase());
  });

  const {
    enterValue: password,
    hasError: passwordHasError,
    onEnterValueChangeHandler: passwordChangeHandler,
    onInputIsTouchedHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  const {
    enterValue: phone,
    hasError: phoneHasError,
    onEnterValueChangeHandler: phoneChangeHandler,
    onInputIsTouchedHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim() !== "");

  const applyData = (responseData) => {
    const expirationTime = new Date(
      new Date().getTime() + responseData.expiresIn * 1000
    );
    authCtx.login(responseData.idToken, expirationTime);
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();

    let requestData = {};

    if (isLoginForm) {
      if (emailHasError || passwordHasError) {
        return;
      }
      requestData = {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxz4_e9HdJ-sMLmffL-J1SneHjRr3NlDE",
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
      };
    } else {
      if (emailHasError || passwordHasError || nameHasError || phoneHasError) {
        return;
      }
      requestData = {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxz4_e9HdJ-sMLmffL-J1SneHjRr3NlDE",
        method: "POST",
        body: {
          email,
          password,
          displayName: name,
          phone,
          returnSecureToken: true,
        },
      };
    }
    sendRequest(requestData, applyData);
    resetEmail();
    resetPassword();
    resetName();   
    resetPhone();
    router.push("/");
  };

  const LoginPart = (
    <>
      <Login
        enterEmail={email}
        enterEmailIsInvalid={emailHasError}
        emailChangeHandler={emailChangeHandler}
        emailBlurHandler={emailBlurHandler}
        enterPassword={password}
        enterPasswordIsInvalid={passwordHasError}
        passwordChangeHandler={passwordChangeHandler}
        passwordBlurHandler={passwordBlurHandler}
      />
      <Button title="登入" />
    </>
  );
  const RegisterPart = (
    <>
      <Register
        enterEmail={email}
        enterEmailIsInvalid={emailHasError}
        emailChangeHandler={emailChangeHandler}
        emailBlurHandler={emailBlurHandler}
        enterPassword={password}
        enterPasswordIsInvalid={passwordHasError}
        passwordChangeHandler={passwordChangeHandler}
        passwordBlurHandler={passwordBlurHandler}
        enterName={name}
        enterNameIsInvalid={nameHasError}
        nameChangeHandler={nameChangeHandler}
        nameBlurHandler={nameBlurHandler}
        enterPhone={phone}
        enterPhoneIsInvalid={phoneHasError}
        phoneChangeHandler={phoneChangeHandler}
        phoneBlurHandler={phoneBlurHandler}
      />
      <GreenButton title="註冊" />
    </>
  );
  return (
    <div className={classes.container}>
      <Banner title="登入及註冊" />
      <div className={classes.wrapper}>
        <div className={classes.loginContainer}>
          <div className={classes.header}>
            <a
              className={
                `${classes.link}` + " " + `${isLoginForm && classes.visited}`
              }
              onClick={switchForm}
            >
              登入
            </a>
            <span>|</span>
            <a
              className={
                `${classes.link}` + " " + `${!isLoginForm && classes.visited}`
              }
              onClick={switchForm}
            >
              註冊
            </a>
          </div>
          <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.inputContainer}>
              {isLoginForm ? LoginPart : RegisterPart}
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
