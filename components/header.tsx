"use client";

import styled from "styled-components";
import Logo from "../assets/logo.png";
import ShoppingCart from "../assets/shopping-cart.png";
import Currency from "./currency-dropdown";
import { useProductStore } from "@/store/zustand";
import Link from "next/link";
import { useState } from "react";

const HeaderWrapper = styled.section`
  width: 100%;
  height: 60px;
  padding: 0 75px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CategoryContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Category = styled(Link)<{ isCurrentCategory: boolean }>`
  height: 100%;
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${(props) => (props.isCurrentCategory ? "#5ece7b" : "black")};
  border-bottom: ${(props) =>
    props.isCurrentCategory ? "1px solid #5ece7b" : "none"};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: #5ece7b;
    border-bottom: none;
  }
`;

const LogoButton = styled(Link)`
  background-image: url(${Logo.src});
  padding: 20px;
  background-size: contain;
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

const ShoppingCartIcon = styled(Link)`
  background-image: url(${ShoppingCart.src});
  padding: 9px;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const {
    categories,
    currencies,
    currentCurrency,
    currentCategory,
    setCategory,
    setCurrency,
  } = useProductStore();

  return (
    <HeaderWrapper>
      <CategoryContainer>
        {categories?.map((c) => {
          const isCurrentCategory = c.name === currentCategory;
          return (
            <Category
              key={c.name}
              href={"/"}
              onClick={() => {
                setCategory(c.name);
              }}
              isCurrentCategory={isCurrentCategory}
            >
              {c.name.toUpperCase()}
            </Category>
          );
        })}
      </CategoryContainer>
      <LogoButton
        href={"/"}
        onClick={() => {
          setCategory("all");
        }}
      ></LogoButton>
      <ShoppingCartContainer>
        <Currency
          allCurrencies={currencies}
          currentCurrency={currentCurrency}
          handleSelectedCurrency={setCurrency}
        ></Currency>
        <ShoppingCartIcon href={`/cart`}></ShoppingCartIcon>
      </ShoppingCartContainer>
    </HeaderWrapper>
  );
};

export default Header;
