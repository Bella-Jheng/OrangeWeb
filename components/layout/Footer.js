import React from "react";
import classes from "./Footer.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.part}>
        <img alt="Logo" src="/Footer.png" className={classes.logoImage} />
        <div className={classes.icons}>
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className={classes.part}>
        <div className={classes.customerService}>
        <h3 className={classes.title}>顧客服務</h3>
          <a href=""> 查詢訂單</a>
          <br />
          <a href=""> 會員資料</a>
          <br />
        </div>
        <div className={classes.contactUs}>
        <h3 className={classes.title}>聯絡我們</h3>
          <div>
            <CalendarMonthIcon/> 聯絡時間 : <br />
            週一～週日 : 8:00~20:00{" "}
          </div>
          <div>
            <LocalPhoneIcon/> 電話:0918435820
          </div>
          <div>
            <EmailIcon/> 信箱:test@net.tw
          </div>
        </div>
      </div>
      <p className={classes.copyright}>Copyright ⓒ {year}</p>
    </div>
  );
}

export default Footer;
