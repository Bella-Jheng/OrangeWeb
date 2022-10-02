import React, { Fragment } from "react";
import Banner from "../../components/layout/Banner";
import Products from "../../components/products/Products";
import styled from "styled-components";

const Container =styled.div`
  padding-top: 80px;
`

const Section = styled.div`
  padding-top: 75px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const index = () => {
  return (
    <Container>
      <Banner title="線上商店" />
      <Section>
        <FilterContainer>
          <Filter>
            <FilterText>商品類別:</FilterText>
            <Select>
              <Option selected>水果類</Option>
              <Option>蔬菜類</Option>
            </Select>
          </Filter>
          <Filter>
          <FilterText>商品排序:</FilterText>
          <Select>
            <Option selected>最新</Option>
            <Option>價格 (低到高)</Option>
            <Option>價格 (高到低)</Option>
          </Select>
        </Filter>
        </FilterContainer>
        <Products />
      </Section>
    </Container>
  );
};

export default index;
