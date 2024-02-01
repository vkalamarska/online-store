"use client";

import styled from "styled-components";
import Logo from "../../assets/logo.png";
import ShoppingCart from "../../assets/shopping-cart.png";
import Link from "next/link";

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

const ShoppingCartWrapper = styled.div`
  display: flex;
  grid-column: 3/4;
  justify-content: flex-end;
`;

const ShoppingCartContainer = styled.div`
  width: 25px;
  position: relative;
`;

const QuantityContainer = styled.div`
  height: 14px;
  width: 14px;
  top: 0px;
  right: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  z-index: 2;
`;

const ShoppingCartIcon = styled(Link)`
  padding: 9px;
  background-image: url(${ShoppingCart.src});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export {
  HeaderWrapper,
  CategoryContainer,
  Category,
  LogoButton,
  ShoppingCartWrapper,
  ShoppingCartContainer,
  QuantityContainer,
  ShoppingCartIcon,
};
