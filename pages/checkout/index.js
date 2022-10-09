import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import classes from "./index.module.css";
import useHttp from "../../hooks/use-http";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import AuthContext from "../../store/auth-context";

import Banner from "../../components/layout/Banner";
import Alert from "../../components/UI/Alert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import { GreenButton } from "../../components/UI/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const index = () => {
  const [formData, setFormData] = useState({
    cartData: {},
    custData: {},
  });
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const dispatch = useDispatch();

  //處理訂單對話框
  const [alertOpen, setAlertOpen] = useState(false);
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  //購物車內容
  const cart = useSelector((state) => state.cart);
  const { isLoading, error, sendRequest } = useHttp();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //清除購物車
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart({ id: "", size: "" }));
  };

  //訂單資訊
  const [isFormInvalid, setFormIsInvalid] = useState({
    nameState: false,
    emailState: false,
    phoneState: false,
    cardNumberState: false,
    cardOwnerState: false,
    cardDateState: false,
    saftyNumberState: false,
    sendWayState: false,
    sendAddrState: false,
    sendNameState: false,
    sendPhoneState: false,
    recieptTypeState: false,
    recieptState: false,
  });

  let formIsValid = false;
  const isEmpty = (value) => value.trim() === "";
  const isThreeChart = (value) => value.trim().length === 3;

  //顧客資料
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  //付款資料
  const cardNumber = useRef();
  const cardOwner = useRef();
  const cardDate = useRef();
  const saftyNumber = useRef();
  //送貨資料
  const sendWay = useRef();
  const sendAddr = useRef();
  const sendName = useRef();
  const sendPhone = useRef();
  //發票
  const recieptType = useRef();
  const reciept = useRef();

  const comfirmDataHandler = (event) => {
    event.preventDefault();
    const enterName = name.current.value;
    const enterEmail = email.current.value;
    const enterPhone = phone.current.value;
    const enterCardNumber = cardNumber.current.value;
    const enterCardOwner = cardOwner.current.value;
    const enterCardDate = cardDate.current.value;
    const enterSaftyNumber = saftyNumber.current.value;
    const enterSendWay = sendWay.current.value;
    const enterSendAddr = sendAddr.current.value;
    const enterSendName = sendName.current.value;
    const enterSendPhone = sendPhone.current.value;
    const enterRecieptType = recieptType.current.value;
    const enterReciept = reciept.current.value;

    const enterNameIsInvalid = isEmpty(enterName);
    const enterEmailIsInvalid = isEmpty(enterEmail);
    const enterPhoneIsInvalid = isEmpty(enterPhone);
    const enterCardNumberIsInvalid = isEmpty(enterCardNumber);
    const enterCardOwnerIsInvalid = isEmpty(enterCardOwner);
    const enterCardDateIsInvalid = isEmpty(enterCardDate);
    const enterSaftyNumberIsInvalid = !isThreeChart(enterSaftyNumber);
    const enterSendWayIsInvalid = isEmpty(enterSendWay);
    const enterSendAddrIsInvalid = isEmpty(enterSendAddr);
    const enterSendNameIsInvalid = isEmpty(enterSendName);
    const enterSendPhoneIsInvalid = isEmpty(enterSendPhone);
    const enterRecieptTypeIsInvalid = isEmpty(enterRecieptType);
    const enterRecieptIsInvalid = isEmpty(enterReciept);

    setFormIsInvalid({
      nameState: enterNameIsInvalid,
      emailState: enterEmailIsInvalid,
      phoneState: enterPhoneIsInvalid,
      cardNumberState: enterCardNumberIsInvalid,
      cardOwnerState: enterCardOwnerIsInvalid,
      cardDateState: enterCardDateIsInvalid,
      saftyNumberState: enterSaftyNumberIsInvalid,
      sendWayState: enterSendWayIsInvalid,
      sendAddrState: enterSendAddrIsInvalid,
      sendNameState: enterSendNameIsInvalid,
      sendPhoneState: enterSendPhoneIsInvalid,
      recieptTypeState: enterRecieptTypeIsInvalid,
      recieptState: enterRecieptIsInvalid,
    });

    formIsValid =
      !enterNameIsInvalid &&
      !enterEmailIsInvalid &&
      !enterPhoneIsInvalid &&
      !enterCardNumberIsInvalid &&
      !enterCardOwnerIsInvalid &&
      !enterCardDateIsInvalid &&
      !enterSaftyNumberIsInvalid &&
      !enterSendWayIsInvalid &&
      !enterSendAddrIsInvalid &&
      !enterSendNameIsInvalid &&
      !enterSendPhoneIsInvalid &&
      !enterRecieptTypeIsInvalid &&
      !enterRecieptIsInvalid;

    if (!formIsValid) {
      return;
    }
    setFormData({
      cartData: { cart },
      custData: {
        enterName,
        enterEmail,
        enterPhone,
        enterCardNumber,
        enterCardOwner,
        enterCardDate,
        enterSaftyNumber,
        enterSendWay,
        enterSendAddr,
        enterSendName,
        enterSendPhone,
        enterRecieptType,
        enterReciept,
      },
    });
    handleAlertOpen();
  };

  const onSubmitHandler = () => {
    const requestData = {
      url: "https://react-http-3d73c-default-rtdb.firebaseio.com/orangeorder.json",
      method: "POST",
      body: {
        custToken: authCtx.token ? authCtx.token : null,
        cartData: formData.cartData,
        custData: formData.custData,
      },
    };

    const applyData = (responseData) => {
      console.log(requestData);
    };

    sendRequest(requestData, applyData);
    removeFromCartHandler();
    handleAlertClose();
    router.push("/");
  };

  return (
    <div className={classes.container}>
      <Alert
        openAlert={alertOpen}
        handleClose={handleAlertClose}
        handleAgree={onSubmitHandler}
        title="送出訂單"
        alertContent="送出後無法修改，確定要送出訂單嗎？"
        disagree={true}
      />
      <Banner title="訂單確認" />
      {cart.items.length === 0 ? (
        <div className={classes.wrapper}>
          <div className={classes.cartEmptyContainer}>
            <ShoppingCartIcon style={{ fontSize: 150, color: "gray" }} />
            <br />
            <Link href="/product-list">
              <GreenButton title="繼續購物" width="200px" />
            </Link>
          </div>
        </div>
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.cartContainer}>
            <div className={classes.cartHeader} onClick={handleExpandClick}>
              <h2>合計: NT$ {cart.totalPrice}</h2>
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
              {cart.items.map((item) => (
                <div className={classes.column} key={item.id}>
                  <div className={classes.cartMainPart}>
                    <img src={item.img} />
                    <p>{item.name}</p>
                  </div>
                  <div className={classes.cartInfor}>NT$ {item.price}</div>
                  <div className={classes.cartInfor}>{item.quantity}</div>
                  <div className={classes.cartInfor}>NT$ {item.totalPrice}</div>
                </div>
              ))}
            </Collapse>
          </div>
          <div className={classes.custinforContainer}>
            <div>
              <div className={classes.custHeaderColumn}>
                <div>顧客資訊</div>
              </div>
              <div className={classes.column}>
                <div className={classes.custColumn}>
                  <p>顧客姓名</p>
                  <input defaultValue="鄭伊婷" ref={name} />
                  {isFormInvalid.nameState && (
                    <p className={classes.invalid}>請輸入姓名</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>電子信箱</p>
                  <input
                    defaultValue="bz850308@gmail.com"
                    type="email"
                    ref={email}
                  />
                  {isFormInvalid.emailState && (
                    <p className={classes.invalid}>請輸入Email</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>電話號碼</p>
                  <input ref={phone} maxLength="10" />
                  {isFormInvalid.phoneState && (
                    <p className={classes.invalid}>請輸入電話</p>
                  )}
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
                  <input type="number" ref={cardNumber} />
                  {isFormInvalid.cardNumberState && (
                    <p className={classes.invalid}>請輸入卡號</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>持卡人姓名</p>
                  <input ref={cardOwner} />
                  {isFormInvalid.cardOwnerState && (
                    <p className={classes.invalid}>請輸入持卡人姓名</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>有效日期(MM/YY)</p>
                  <input ref={cardDate} />
                  {isFormInvalid.cardDateState && (
                    <p className={classes.invalid}>請輸入有效日期</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>安全碼</p>
                  <input type="number" ref={saftyNumber} maxLength="3" />
                  {isFormInvalid.saftyNumberState && (
                    <p className={classes.invalid}>請輸入安全碼</p>
                  )}
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
                  <input defaultValue="鄭伊婷" ref={sendName} />
                  {isFormInvalid.sendNameState && (
                    <p className={classes.invalid}>請輸入收件人名稱</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>收件人電話號碼</p>
                  <input ref={sendPhone} maxLength="10" />
                  {isFormInvalid.sendPhoneState && (
                    <p className={classes.invalid}>請輸入收件人電話號碼</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>送貨方式</p>
                  <input defaultValue="宅配" ref={sendWay} />
                  {isFormInvalid.sendWayState && (
                    <p className={classes.invalid}>請輸入送貨方式</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>送貨地址</p>
                  <input ref={sendAddr} />
                  {isFormInvalid.sendAddrState && (
                    <p className={classes.invalid}>請輸入送貨地址</p>
                  )}
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
                  <select ref={recieptType} defaultValue="雲端發票">
                    <option>雲端發票</option>
                  </select>
                  {isFormInvalid.recieptTypeState && (
                    <p className={classes.invalid}>請選擇雲端發票</p>
                  )}
                </div>
                <div className={classes.custColumn}>
                  <p>輸入載具</p>
                  <input ref={reciept} />
                  {isFormInvalid.recieptState && (
                    <p className={classes.invalid}>請輸入載具</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bottomContainer}>
            <GreenButton
              title="送出訂單"
              width="200px"
              onClick={comfirmDataHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
