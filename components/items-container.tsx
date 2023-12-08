"use client";

import styled from "styled-components";
import Product from "./product";
import { useProductStore } from "@/store/zustand";

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 75px;
`;

const ItemsContainer = () => {
  const {
    categories,
    currentCategory: currentCategoryName,
    currentCurrency,
  } = useProductStore();

  const selectedCategory = categories.find(
    (category) => category.name === currentCategoryName
  );

  return (
    <ItemsWrapper>
      {selectedCategory?.products.map((p) => (
        <Product key={p.id} product={p} currentCurrency={currentCurrency} />
      ))}
    </ItemsWrapper>
  );
};

export default ItemsContainer;
