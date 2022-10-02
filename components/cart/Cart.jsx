import React from "react";
import CartItem from "./CartItem"

import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const Cart =(props) =>{

  return (
    <div>
      <SwipeableDrawer anchor="right" open={props.isOpenCart} onClose={props.handleCart}  onOpen={props.handleCart}>
        <CartItem onCloseCart={props.handleCart}/>
      </SwipeableDrawer>
    </div>
  );
}

export default Cart;