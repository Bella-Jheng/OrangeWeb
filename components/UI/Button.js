import React from "react";
import styled from "styled-components";

const OrangeButton = styled.button`
  width: 100px;
  padding: 7px 15px;
  border-radius: 5px;
  border: 1px solid #fe7f2e;
  background-color: #fe7f2e;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(999, 999, 999, 0.1);
    color: #fe7f2e;
  }
`;

const GreenbgButton = styled.button`
  width: 100px;
  padding: 7px 15px;
  border-radius: 5px;
  border: 1px solid #9EAF6A;
  background-color: #9EAF6A;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(999, 999, 999, 0.1);
    color: #9EAF6A;
  }
`;

const BorderWhiteWords = styled.button`
  width: 100px;
  padding: 7px 15px;
  background: rgba(999, 999, 999, 0.1);
  color: white;
  border: 1px solid #fe7f2e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgba(999, 999, 999, 0.5);
  }
`;

const BorderOrangeWords = styled.button`
  width: 100px;
  padding: 7px 15px;
  background: rgba(999, 999, 999, 0.1);
  color: #fe7f2e;
  border: 1px solid #fe7f2e;
  border-radius: 5px;
  cursor: pointer;
`;

const BorderGreenWords = styled.button`
  width: 100px;
  padding: 7px 15px;
  background: rgba(999, 999, 999, 0.1);
  color: #9EAF6A;
  border: 1px solid #9EAF6A;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = (props) => {
  return <OrangeButton>{props.title}</OrangeButton>;
};

export const BorderButtonWhiteWords = (props) => {
  return <BorderWhiteWords>{props.title}</BorderWhiteWords>;
};

export const BorderButtonOrangeWords = (props) => {
  return <BorderOrangeWords>{props.title}</BorderOrangeWords>;
};

export const GreenButton = (props)=>{
  return <GreenbgButton>{props.title}</GreenbgButton>
}

export const BorderButtonGreenWords = (props) => {
  return <BorderGreenWords>{props.title}</BorderGreenWords>;
};

export default Button;
