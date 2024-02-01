"use client";

import Currency from "../currency-dropdown/currency-dropdown";
import { useCartStore, useProductStore } from "@/store/zustand";
import { useEffect } from "react";
import useStoreData from "@/hooks/useStoreData";
import LoadingPage from "../loading-page/loading-page";
import {
  HeaderWrapper,
  CategoryContainer,
  Category,
  LogoButton,
  ShoppingCartWrapper,
  ShoppingCartContainer,
  QuantityContainer,
  ShoppingCartIcon,
} from "./header.styles";

const Header = () => {
  const { data, loading, error } = useStoreData();

  const {
    initializeStore,
    categories,
    currencies,
    currentCurrency,
    currentCategory,
    setCategory,
    setCurrency,
  } = useProductStore();

  const { cartItems } = useCartStore();

  useEffect(() => {
    if (!data?.categories || categories.length) return;

    initializeStore(data.categories);
  }, [data]);

  if (loading || !data) return <LoadingPage />;
  if (error) return <pre>{error.message}</pre>;

  const totalQuantity = cartItems.reduce((sum, item) => {
    return item.quantity + sum;
  }, 0);

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
      <ShoppingCartWrapper>
        <Currency
          allCurrencies={currencies}
          currentCurrency={currentCurrency}
          handleSelectedCurrency={setCurrency}
        ></Currency>
        <ShoppingCartContainer>
          {totalQuantity > 0 && (
            <QuantityContainer>{totalQuantity}</QuantityContainer>
          )}
          <ShoppingCartIcon href={`/cart`}></ShoppingCartIcon>
        </ShoppingCartContainer>
      </ShoppingCartWrapper>
    </HeaderWrapper>
  );
};

export default Header;
