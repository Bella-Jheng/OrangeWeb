import { useState, useCallback, useEffect } from "react";
import AuthContext from "./auth-context";

let loginTimer;
const cauculateRemainTime = (expiration) => {
  const currentTime = new Date().getTime();
  const expirationTime = new Date(expiration).getTime();
  const remainingTime = expirationTime - currentTime;

  return remainingTime;
};

const storeToken = () => {
  const token = localStorage.getItem("token");
  const expirationTime = localStorage.getItem("expirationTime");

  let remainingTime = cauculateRemainTime(expirationTime);

  //登入時間超過1小時，登出
  if (remainingTime <= 600000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token,
    remainingTime,
  };
};

const AuthContextProvider = (props) => {
  //每render一次，重新計算過期時間
  //回傳token,remainingTime
  let tokenData;
  let initialToken;
  useEffect(() => {
    tokenData = storeToken();
    if (tokenData) {
      initialToken = localStorage.getItem("token");
    }
  }, []);

  const [token, setToken] = useState(initialToken);
  const isLogin = !!token;
  //isString && empty    -> false
  //isString && notEmpty -> true

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (loginTimer) {
      clearTimeout(loginTimer);
    }
  }, []);

  const login = (userToken, expirationTime) => {
    //expirationTime 過期時間 = firebase 過期時間
    setToken(userToken);
    localStorage.setItem("token", userToken);
    localStorage.setItem("expirationTime", expirationTime);
    
    //倒數計時，時間到執行登出
    loginTimer = setTimeout(logout, cauculateRemainTime(expirationTime));
  };

  //重新render時重刷剩餘時間
  useEffect(() => {
    if (tokenData) {
      loginTimer = setTimeout(logout, tokenData.remainingTime);
    }
  }, [tokenData, logout]);

  const authContext = {
    token,
    isLogin,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
