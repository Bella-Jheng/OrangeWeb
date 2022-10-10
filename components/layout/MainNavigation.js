import React, { useContext, useState } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Image from "next/image";
import AuthContext from "../../store/auth-context";
import { useSelector } from "react-redux";
import Alert from "../UI/Alert";
import { useRouter } from "next/router";

//MateriaUI
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const MainNavigation = (props) => {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState(false);
  const handleClickAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };
  const matches = useMediaQuery("(max-width:480px)");
  const authCtx = useContext(AuthContext);
  const onLogout = () => {
    setAlertOpen(false);
    authCtx.logout();
    router.push("/");
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <Alert
        openAlert={alertOpen}
        handleClose={handleAlertClose}
        handleAgree={onLogout}
        title="登出"
        alertContent="確定要登出？多看看嘛～"
        disagree={true}
      />
      <header className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <Link href="/">
              <Image alt="Logo" src="/Logo.png" width="100" height="50"></Image>
            </Link>
          </div>
          <div className={classes.center}>
            <div className={classes.menuItem}>
              <a href="/product-list">
                {!matches && <a className={classes.link}>線上商店</a>}
              </a>
            </div>
            {/* <div className={classes.menuItem}>
            <Link href="/">
              <a className={classes.link}>文章</a>
            </Link>
          </div> */}
          </div>
          <div className={classes.right}>
            {matches && (
              <div className={classes.menuItem}>
                <a href="/product-list">
                  <LocalMallIcon className={classes.link} />
                </a>
              </div>
            )}
            <div className={classes.menuItem}>
              {!authCtx.isLogin && (
                <Link href="/login">
                  <a className={classes.link}>
                    <AccountCircleIcon />
                    {!matches && <p>會員登入</p>}
                  </a>
                </Link>
              )}
              {authCtx.isLogin && (
                <a className={classes.link} onClick={handleClickAlertOpen}>
                  <LogoutIcon />
                  {!matches && <p>會員登出</p>}
                </a>
              )}
            </div>
            <div className={classes.menuItem} onClick={props.handleCart}>
              <Badge badgeContent={totalQuantity} color="success">
                <ShoppingCartOutlined className={classes.link} />
              </Badge>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
