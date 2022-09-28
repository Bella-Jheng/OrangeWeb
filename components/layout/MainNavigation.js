import React,{useState} from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Image from "next/image";

//MateriaUI
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainNavigation = (props) => {
//   const matches = useMediaQuery("(max-width:600px)");
const [isToogle , setIsToggle] = useState(false)

const toggleHandler=()=>{
    setIsToggle(prevState => (!prevState))
}

  return (
    <header className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Image alt="Logo" src="/Logo.png" width="100" height="50"></Image>
        </div>
        <div className={classes.center}>
          <div className={classes.menuItem}>
            <Link href="/">
              <a className={classes.link}>線上商店</a>
            </Link>
          </div>
          <div className={classes.menuItem}>
            <Link href="/">
              <a className={classes.link}>文章</a>
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.menuItem}>
            <Link href="/">
              <a className={classes.link}>會員登入</a>
            </Link>
          </div>
          <div className={classes.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
        <div className={classes.menu}>
          <div className={classes.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          <div className={classes.menuItem} onClick={toggleHandler}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
