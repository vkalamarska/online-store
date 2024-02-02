"use client";

import Product from "../product/product";
import { useProductStore } from "@/store/zustand";
import { ItemsWrapper } from "./items-container.styles";

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
      {selectedCategory?.products
        .toSorted((a) => (a.inStock ? -1 : 1))
        .map((p) => (
          <Product key={p.id} product={p} currentCurrency={currentCurrency} />
        ))}
    </ItemsWrapper>
  );
};

export default ItemsContainer;
