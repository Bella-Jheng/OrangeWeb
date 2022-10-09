import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import classes from "./index.module.css";
import { cartActions } from "../../store/cart-slice";

import Button, { GreenButton } from "../../components/UI/Button";
import Banner from "../../components/layout/Banner";
import Horizontal from "../../components/UI/Horizantal";
import { productDetails } from "../../components/data";
import { Add, Remove } from "@mui/icons-material";

const ProductDetails = (props) => {
  const { id, name, price, size, productImg, intro, description } = props;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        img: productImg,
        name,
        price: thePrice.price,
        size: thePrice.size ? thePrice.size : null,
        quantity: amount,
      })
    );
  };
  //不同 size 的價格不同
  const [thePrice, setThePrice] = useState({
    price: price ? price[0] : null,
    size: size ? size[0] : null,
  });
  const changePriceHandler = (event) => {
    const value = event.target.value;
    setThePrice({
      price: price[value],
      size: size[value],
    });
  };

  //數量加減
  const [amount, setAmount] = useState(1);
  const addAmountHandler = () => {
    setAmount((prev) => (prev = prev + 1));
  };
  const removeAmountHandler = () => {
    setAmount((prev) => (prev = prev - 1));
  };

  return (
    <div className={classes.container}>
      <Banner title="商品詳情" />
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <img className={classes.image} src={productImg} />
        </div>
        <div className={classes.infoContainer}>
          <h1 className={classes.title}>{name}</h1>
          <span className={classes.price}>$ {thePrice.price}</span>
          <p className={classes.description}>{intro}</p>

          <div className={classes.filterContainer}>
            {size && (
              <div className={classes.filter}>
                <span className={classes.filterTitle}>Size</span>
                <select
                  className={classes.filterSize}
                  onChange={changePriceHandler}
                >
                  {size.map((theSize, index) => (
                    <option
                      id={index}
                      value={index}
                      className={classes.filterSizeOption}
                    >
                      {theSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className={classes.amountContainer}>
              <Remove onClick={removeAmountHandler} />
              <span className={classes.amount}>{amount}</span>
              <Add onClick={addAmountHandler} />
            </div>
          </div>
          <div className={classes.addContainer}>
            <GreenButton
              title="加入購物車"
              onClick={addToCartHandler}
              type="button"
            />
            <Link href="/checkout">
              <Button title="立刻購買" />
            </Link>
          </div>
        </div>
        <div className={classes.detailContainer}>
          <Horizontal title="商品描述" />
          <div className={classes.detail}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: productDetails.map((detail) => ({
      params: { productId: detail.id },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const selectedProduct = productDetails.find(
    (product) => product.id === productId
  );

  return {
    props: {
      id: selectedProduct.id.toString(),
      name: selectedProduct.name,
      price: selectedProduct.price,
      size: selectedProduct.size ? selectedProduct.size : null,
      productImg: selectedProduct.productImg,
      intro: selectedProduct.intro,
      description: selectedProduct.description,
    },
  };
}

export default ProductDetails;
