import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "../UI/Button";
import Link from "next/link";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={props.isOpenCart}
        onClose={props.handleCart}
        onOpen={props.handleCart}
      >
        {cartItems.length === 0 ? (
          <Box
            sx={{
              width: "250px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                <p>您的購物車是空的</p>
          </Box>
        ) : (
          <Box sx={{ width: "250px" }}>
            <List>
              <ListItem sx={{ justifyContent: "right" }} disablePadding>
                <IconButton onClick={props.handleCart}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    name: item.name,
                    img: item.img,
                    size: item.size,
                    quantity: item.quantity,
                    totalPrice: item.totalPrice,
                    price: item.price,
                  }}
                />
              ))}
            </List>
            <List sx={{ position: "absolute", bottom: "0", width: "100%" }}>
              <ListItem>
                <Link href="/checkout">
                  <Button title="訂單結帳" width="100%" />
                </Link>
              </ListItem>
            </List>
          </Box>
        )}
      </SwipeableDrawer>
    </div>
  );
};

export default Cart;
