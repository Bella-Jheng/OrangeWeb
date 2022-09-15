import React from "react";
import classes from "./ProductItem.module.css";

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from "@mui/icons-material/Search";

const ProductItem = (props) => {
console.log(props)
  const {id,img,name} =props.item
  return (
    <div className={classes.container}>
      <div className={classes.circle}></div>
      <img src={img} />
      <div className={classes.info}>
        <div className={classes.icon}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={classes.icon}>
          <SearchIcon />
        </div>
        <div className={classes.icon}>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
