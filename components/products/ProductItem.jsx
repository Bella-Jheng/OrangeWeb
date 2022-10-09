import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import Link from "next/link";

//addToCart
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const ProductItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { id, img, name, price, size } = props.item;
  const dispatch = useDispatch();
 
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        img,
        name,
        price: price?price[0]:null,
        size: size?size[0]:null,
        quantity: 1,
      })
    );
  };

  const enterContainer = () => {
    setIsHover(true);
  };
  const exitContainer = () => {
    setIsHover(false);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={enterContainer}
      onMouseLeave={exitContainer}
    >
      <img className={classes.image + " "} src={img} />
      <p>{name}</p>
      {price.length ==1 ? <p className={classes.price}>NT$ {price}</p> : <p className={classes.price}>NT$ {price[0]}~ {price[price.length-1]}</p>}
      

      {isHover && (
        <div
          className={
            classes.info +
            " " +
            `${isHover ? classes.infoEnter : classes.infoExit}`
          }
        >
          <div className={classes.icon}>
            <ShoppingCartOutlinedIcon onClick={addToCartHandler} />
          </div>
          <Link href={`/product-detail/${id}`}>
            <div className={classes.icon}>
              <SearchIcon />
            </div>
          </Link>
          <div className={classes.icon}>
            <FavoriteBorderIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
