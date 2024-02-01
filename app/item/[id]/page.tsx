"use client";

import { useProductStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDetailsSection from "@/components/product-details-section/product-details-section";
import {
  Images,
  ImagesContainer,
  ItemContainer,
  ItemImage,
  PageWrapper,
} from "./page.styles";

export default function ItemPage() {
  const { id: productId } = useParams();

  const {
    categories,
    currentCategory: currentCategoryName,
    currentCurrency,
  } = useProductStore();

  const selectedCategory = categories.find(
    (category) => category.name === currentCategoryName
  );

  const selectedProduct = selectedCategory?.products.find(
    (product) => product.id === productId
  );

  const selectedCurrencyPrice = selectedProduct?.prices.find(
    (price) => price.currency.symbol === currentCurrency
  );

  const [currentImage, setCurrentImage] = useState(selectedProduct?.gallery[0]);

  useEffect(() => {
    if (!currentImage && selectedProduct) {
      setCurrentImage(selectedProduct?.gallery[0]);
    }
  }, [selectedProduct]);

  return (
    <PageWrapper>
      <ItemContainer>
        <ImagesContainer>
          {selectedProduct?.gallery.map((i) => (
            <Images
              key={i}
              imagesUrl={i || ""}
              onClick={() => setCurrentImage(i)}
            ></Images>
          ))}
        </ImagesContainer>
        <ItemImage imageUrl={currentImage || ""}></ItemImage>
        <ProductDetailsSection
          selectedCurrencyPrice={selectedCurrencyPrice!}
          selectedProduct={selectedProduct!}
        ></ProductDetailsSection>
      </ItemContainer>
    </PageWrapper>
  );
}
