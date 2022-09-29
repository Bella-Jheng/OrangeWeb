import { Add, Remove } from "@mui/icons-material";
import classes from "./index.module.css";
import Button, { GreenButton } from "../../components/UI/Button";
import Banner from "../../components/layout/Banner";
import Horizontal from "../../components/UI/Horizantal";

const Index = () => {
  return (
    <div className={classes.container}>
      <Banner title="商品詳情" />
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <img
            className={classes.image}
            src="https://www.owlting.com/business/item/p/480_0/item_14528_92eef9462dfed51c7fd76f64eb9a88ad"
          />
        </div>
        <div className={classes.infoContainer}>
          <h1 className={classes.title}>香甜茂谷禮盒</h1>
          <span className={classes.price}>$ 500</span>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          
          <div className={classes.filterContainer}>
            <div className={classes.filter}>
              <span className={classes.filterTitle}>Size</span>
              <select className={classes.filterSize}>
                <option className={classes.filterSizeOption}>25</option>
                <option className={classes.filterSizeOption}>26</option>
                <option className={classes.filterSizeOption}>27</option>
              </select>
            </div>
          </div>
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
          <div className={classes.detail}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec venenatis, dolor in finibus
            malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris.
            Nulla fermentum vestibulum ex, eget tristique tortor pretium ut.
            Curabitur elit justo, consequat id condimentum ac, volutpat
            ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec venenatis, dolor in finibus malesuada, lectus ipsum porta
            nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum
            ex, eget tristique tortor pretium ut. Curabitur elit justo,
            consequat id condimentum ac, volutpat ornare.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus
            malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris.
            Nulla fermentum vestibulum ex, eget tristique tortor pretium ut.
            Curabitur elit justo, consequat id condimentum ac, volutpat
            ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec venenatis, dolor in finibus malesuada, lectus ipsum porta
            nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum
            ex, eget tristique tortor pretium ut. Curabitur elit justo,
            consequat id condimentum ac, volutpat ornare.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
