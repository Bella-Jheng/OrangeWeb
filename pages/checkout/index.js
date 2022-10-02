import React, { useState } from "react";
import classes from "./index.module.css";

import Banner from "../../components/layout/Banner";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import { GreenButton } from "../../components/UI/Button";

const index = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
      <Banner title="訂單確認" />
      <div className={classes.wrapper}>
        <div className={classes.cartContainer}>
          <div className={classes.cartHeader} onClick={handleExpandClick}>
            <h2>合計: NT$2,344</h2>
            <KeyboardArrowDownIcon />
          </div>
          <Collapse
            style={{ flex: "100%" }}
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <div className={classes.column}>
              <div className={classes.cartMainPart}>商品資料</div>
              <div className={classes.cartInfor}>單件價格</div>
              <div className={classes.cartInfor}>數量</div>
              <div className={classes.cartInfor}>小計</div>
            </div>
            <div className={classes.column}>
              <div className={classes.cartMainPart}>
                <img src="https://www.owlting.com/business/item/p/480_0/item_14528_92eef9462dfed51c7fd76f64eb9a88ad" />
                <p>香甜茂谷禮盒</p>
              </div>
              <div className={classes.cartInfor}>NT$500</div>
              <div className={classes.cartInfor}>1</div>
              <div className={classes.cartInfor}>NT$500</div>
            </div>
          </Collapse>
        </div>
        <div className={classes.custinforContainer}>
          <div>
            <div className={classes.custHeaderColumn}>
              <div>顧客資訊</div>
            </div>
            <div className={classes.column}>
              <div className={classes.custColumn}>
                <p>顧客名稱</p>
                <input value="鄭伊婷" />
              </div>
              <div className={classes.custColumn}>
                <p>電子信箱</p>
                <input value="bz850308@gmail.com" type="email" />
              </div>
              <div className={classes.custColumn}>
                <p>電話號碼</p>
                <input />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.custinforContainer}>
          <div>
            <div className={classes.custHeaderColumn}>
              <div>付款資料</div>
            </div>
            <div className={classes.column}>
              <div className={classes.custColumn}>
                <p>卡號</p>
                <input value="" type="number" />
              </div>
              <div className={classes.custColumn}>
                <p>持卡人姓名</p>
                <input />
              </div>
              <div className={classes.custColumn}>
                <p>有效日期(MM/YY)</p>
                <input />
              </div>
              <div className={classes.custColumn}>
                <p>安全碼</p>
                <input />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.custHeaderColumn}>
              <div>送貨資料</div>
            </div>
            <div className={classes.column}>
              <div className={classes.custColumn}>
                <p>收件人名稱</p>
                <input value="鄭伊婷" />
              </div>
              <div className={classes.custColumn}>
                <p>收件人電話號碼</p>
                <input />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.custHeaderColumn}>
              <div>發票資訊</div>
            </div>
            <div className={classes.column}>
              <div className={classes.custColumn}>
                <p>發票類型</p>
                <select>
                    <option>雲端發票</option>
                </select>
              </div>
              <div className={classes.custColumn}>
                <p>輸入載具</p>
                <input />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomContainer}>
            <GreenButton title='送出訂單' width='200px'/>
        </div>
      </div>
    </div>
  );
};

export default index;
