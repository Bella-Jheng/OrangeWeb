import React, { useState } from "react";
import classes from "./ProductSlider.module.css";
import styled from "styled-components";
import { popularProducts } from "../data";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ProductSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
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
        {/* {slideItems.map((item) => (
          <div className={classes.slide} key={item.id}>
            <div className={classes.cardContainer}>
             <img alt="Slider" src={item.img} className={classes.image} /> 
            </div>
           
          </div>
        ))} */}
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
