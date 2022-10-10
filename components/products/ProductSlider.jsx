import React, { useState } from "react";
import classes from "./ProductSlider.module.css";
import styled from "styled-components";
import { popularProducts } from "../data";

import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ProductItem from "./ProductItem";

const Wrapper = styled.div`
  height: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -95}vw);
`;

const ProductSlider = () => {
  const matches = useMediaQuery("(max-width:480px)");
  const productLength =  popularProducts.length-1
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } 
    if(direction === "left" && matches){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : productLength);
    }
    if(direction === "right") {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
    if(direction === "right" && matches){
      setSlideIndex(slideIndex < productLength ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={`${classes.arrow}` + " " + `${classes.left}`}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {
          popularProducts.map(item =>(        
          <ProductItem item={item} key={item.id}/>
        ))
      }
      </Wrapper>
      <div
        className={`${classes.arrow}` + " " + `${classes.right}`}
        onClick={() => handleClick("right")}
      >
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default ProductSlider;
