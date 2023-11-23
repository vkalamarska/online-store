"use client";

import styled from "styled-components";
import Logo from "../assets/logo.png";
import ShoppingCart from "../assets/shopping-cart.png";
import Currency from "./currency-dropdown";
import { useProductStore } from "@/store/zustand";

const HeaderWrapper = styled.section`
  width: 100%;
  height: 60px;
  padding: 0 50px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CategoryContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Category = styled.button`
  height: 100%;
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #5ece7b;
    border-bottom: 1px solid #5ece7b;
  }
`;

const LogoButton = styled.button`
  background-image: url(${Logo.src});
  padding: 15px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

const ShoppingCartContainer = styled.div`
  display: flex;
  grid-column: 3/4;
  justify-content: flex-end;
`;

const ShoppingCartIcon = styled.button`
  background-image: url(${ShoppingCart.src});
  padding: 9px;
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

const Header = () => {
  const { categories, currencies, currentCurrency, setCategory, setCurrency } =
    useProductStore();

  return (
    <HeaderWrapper>
      <CategoryContainer>
        {categories?.map((c) => (
          <Category onClick={() => setCategory(c.name)}>
            {c.name.toUpperCase()}
          </Category>
        ))}
      </CategoryContainer>
      <LogoButton></LogoButton>
      <ShoppingCartContainer>
        <Currency
          allCurrencies={currencies}
          currentCurrency={currentCurrency}
          handleSelectedCurrency={setCurrency}
        ></Currency>
        <ShoppingCartIcon></ShoppingCartIcon>
      </ShoppingCartContainer>
    </HeaderWrapper>
  );
};

export default Header;