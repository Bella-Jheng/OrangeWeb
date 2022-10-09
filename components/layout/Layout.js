import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Cart from "../cart/Cart";
import Footer from "./Footer";

import { sendingCartData, fetchingCartData } from "../../store/cart-action";
let isInitial;
const Layout = (props) => {
  const [isOpen, setState] = useState(false);

  const toggleDrawer = () => {
    setState((prevState) => !prevState);
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChange) {
      dispatch(sendingCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div>
      <MainNavigation handleCart={toggleDrawer} />
      <Cart handleCart={toggleDrawer} isOpenCart={isOpen} />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
