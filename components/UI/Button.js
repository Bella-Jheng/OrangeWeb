import React from "react";
import styled from "styled-components";

const OrangeButton = styled.button`
  width: ${(props) => props.width || "100px"};
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
  width: ${(props) => props.width || "100px"};
  padding: 7px 15px;
  border-radius: 5px;
  border: 1px solid #9eaf6a;
  background-color: #9eaf6a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(999, 999, 999, 0.1);
    color: #9eaf6a;
  }
`;

const BorderWhiteWords = styled.button`
  width: ${(props) => props.width || "100px"};
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
  width: ${(props) => props.width || "100px"};
  padding: 7px 15px;
  background: rgba(999, 999, 999, 0.1);
  color: #fe7f2e;
  border: 1px solid #fe7f2e;
  border-radius: 5px;
  cursor: pointer;
`;

const BorderGreenWords = styled.button`
  width: ${(props) => props.width || "100px"};
  padding: 7px 15px;
  background: rgba(999, 999, 999, 0.1);
  color: #9eaf6a;
  border: 1px solid #9eaf6a;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = React.forwardRef((props,ref) => {
  return <OrangeButton width={props.width} onClick={props.onClick}>{props.title}</OrangeButton>;
});

export const BorderButtonWhiteWords = React.forwardRef((props,ref) => {
  return <BorderWhiteWords  width={props.width} onClick={props.onClick}>{props.title}</BorderWhiteWords>;
});

export const BorderButtonOrangeWords = React.forwardRef((props,ref) => {
  return (
    <BorderOrangeWords width={props.width} onClick={props.onClick}>{props.title}</BorderOrangeWords>
  );
});

export const GreenButton = React.forwardRef((props,ref) => {
  return <GreenbgButton  width={props.width} onClick={props.onClick}>{props.title}</GreenbgButton>;
});

export const BorderButtonGreenWords = React.forwardRef((props,ref) => {
  return <BorderGreenWords  width={props.width} onClick={props.onClick}>{props.title}</BorderGreenWords>;
});

export default Button;
