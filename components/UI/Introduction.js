import React from "react";
import styled from "styled-components";
import { BorderButtonOrangeWords } from "./Button";

const Container = styled.div`
  display: flex;
  padding: 20px 100px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width:480px){
    padding: 20px 10px;
  }
`;
const Item = styled.div`
  flex: 50%;
  justify-content: ${(props) => (props.align === "left" ? "left" : "right")};
  padding: 20px;
  padding-left: ${(props) => props.align === "right" && 20}px;
  padding-right: ${(props) => props.align === "left" && 20}px;
  display:flex;
  flex-wrap:wrap;
  @media screen and (max-width:480px){
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 260px;
  @media screen and (max-width:480px){
    height: 200px;
  }
`;

const Intro = styled.p``;

const Part = styled.div`
  flex:100%;
  padding-bottom:10px;
  @media screen and (max-width:480px){
    text-align: center;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Item align="right">
        <Image src="/source.jpg" />
      </Item>
      <Item align="left">
      <Part>
        <Intro>
          坐落於雲林縣大杯香怡然村的三秀員，為首任大悲鄉長張禎祥隻家族產業。張家花園使闢於清同治年間，至日本昭和初年格局底定，現存占地約四公請。元出幣十，期間樹木多寄生有靈芝。張是乃取靈芝隻別稱三秀知名，以為三秀員。
          張禎祥早年受業於新港秀才林維朝、路港師為橋等先生，終身結交文有無算，聲明文瑜俊憲之間。
          張是自命田園詩人，詩文創作不輟，更將度古典園林的想像。體現於自家花園，所造山水亭閣，多懷陶淵明飲一隻至，兼採日本建築形式。為不失談灣獨有的亞掃帶同村風貌
        </Intro>
        </Part>
        <Part>
        <BorderButtonOrangeWords title="閱讀更多" />
        </Part>
      </Item>
    </Container>
  );
};

export default Introduction;
