import React, { useState, useEffect } from "react";
import classes from "./Slider.module.css";
import styled from "styled-components";
import slideItems from "../data";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => handleClick('right'), 3000);
    return () => {
        clearTimeout(timer);
      };
  }, [slideIndex]);

  return (
    <div className={classes.container}>
      <div
        className={`${classes.arrow}` + " " + `${classes.left}`}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftIcon />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item) => (
          <div className={classes.slide}>
            <div className={classes.imageContainer}>
              <img alt="Slider" src={item.img} className={classes.image} />
            </div>
            <div className={classes.infoContainer}>
              <h1 className={classes.infoTitle}>{item.title}</h1>
              <p className={classes.infoDescript}>{item.descript}</p>
              <button className={classes.infoButton}>看更多</button>
            </div>
          </div>
        ))}
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

export default Slider;
