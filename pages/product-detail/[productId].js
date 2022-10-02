import React,{useState} from 'react';
import classes from "./index.module.css";
import { useRouter } from "next/router";

import { Add, Remove } from "@mui/icons-material";
import Button, { GreenButton } from "../../components/UI/Button";
import Banner from "../../components/layout/Banner";
import Horizontal from "../../components/UI/Horizantal";
import { productDetails } from "../../components/data";

const productObject =  {
  id: "S1",
  name: "香甜茂谷禮盒",
  price: [500, 600, 700],
  size: [25, 26, 27],
  productImg: "https://www.owlting.com/business/item/p/480_0/item_14528_92eef9462dfed51c7fd76f64eb9a88ad",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecvenenatis, dolor in finibus malesuada, lectus ipsum porta nunc, atiaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat idcondimentum ac, volutpat ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibusmalesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut.Curabitur elit justo, consequat id condimentum ac, volutpat ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo,consequat id condimentum ac, volutpat ornare.Lorem ipsum dolor sitamet, consectetur adipiscing elit. Donec venenatis, dolor in finibusmalesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut  Curabitur elit justo, consequat id condimentum ac, volutpat ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum portanunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulumex, eget tristique tortor pretium ut. Curabitur elit justo,consequat id condimentum ac, volutpat ornare.",
}


const Index = () => {
  const params = useRouter().query
  const { productId } = params;
  const productObject = productDetails.find(({ id }) => id === productId);
  const { id, name, price, size, productImg, intro, description } =
    productObject;

  const [thePrice, setThePrice] = useState(price[0]);
  const changePriceHandler = (event) => {
    const value = event.target.value
    setThePrice(price[value]);
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
          <span className={classes.price}>$ {thePrice}</span>
          <p className={classes.description}>{intro}</p>

          {size && (
            <div className={classes.filterContainer}>
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
            </div>
          )}
          <div className={classes.addContainer}>
            <div className={classes.amountContainer}>
              <Remove />
              <span className={classes.amount}>1</span>
              <Add />
            </div>
            <GreenButton title="加入購物車"></GreenButton>
            <Button title="立刻購買" />
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

export default Index;
