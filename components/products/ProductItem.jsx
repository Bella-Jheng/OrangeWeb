import React, { useState } from "react";
import classes from "./ProductItem.module.css";
import Link from "next/link";

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const ProductItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { id, img, name } = props.item;

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
      <p className={classes.productName}>{name}</p>
      {isHover && (
        <div
          className={
            classes.info +
            " " +
            `${isHover ? classes.infoEnter : classes.infoExit}`
          }
        >
          <div className={classes.icon}>
            <ShoppingCartOutlinedIcon />
          </div>
          <Link href={`/product-detail/${id}`} >
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
