"use client";

import styled from "styled-components";
import { useProductStore } from "@/store/zustand";
import { useParams } from "next/navigation";
import { useState } from "react";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  color: black;
`;

const ItemContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 0 75px;
  display: flex;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  width: 400px;
  height: 400px;
  margin-right: 90px;
  background-image: url(${(p) => p.imageUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const ImagesContainer = styled.div`
  width: 130px;
  height: 400px;
  margin-right: 90px;
  overflow: auto;
`;

const Images = styled.div<{ imagesUrl: string }>`
  margin: 10px 0;
  height: 130px;
  background-size: 100%;
  background-image: url(${(p) => p.imagesUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

const ProductDetailsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const ProductName = styled.div`
  margin: 5px 0 30px 0;
  font-size: 22px;
`;

const Attributes = styled.div``;

const AttributeName = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: bold;
`;

const AttributeContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

const AttributeItems = styled.button<{
  isColor: boolean;
  backgroundColor: string;
}>`
  height: 30px;
  width: 45px;
  margin-right: 10px;
  border: 1px solid black;
  background-color: ${(p) => (p.isColor ? p.backgroundColor : "white")};
  cursor: pointer;
`;

const Price = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: bold;
`;

const PriceDetailsContainer = styled.div`
  display: flex;
`;

const CurrencySymbol = styled.div`
  margin-right: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const Amount = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const ToCartButton = styled.button`
  height: 30px;
  width: 100%;
  margin-bottom: 15px;
  border: none;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;
`;

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
        <ProductDetailsContainer>
          <Brand>{selectedProduct?.brand}</Brand>
          <ProductName>{selectedProduct?.name}</ProductName>
          {selectedProduct?.attributes.map((a) => (
            <Attributes>
              <AttributeName>{a.name}:</AttributeName>
              <AttributeContainer>
                {a.items.map((i) => {
                  const isColor = i.value.includes("#");
                  return (
                    <AttributeItems isColor={isColor} backgroundColor={i.value}>
                      {!i.value.includes("#") && i.value}
                    </AttributeItems>
                  );
                })}
              </AttributeContainer>
            </Attributes>
          ))}
          <Price>Price:</Price>
          <PriceDetailsContainer>
            <CurrencySymbol>
              {selectedCurrencyPrice?.currency.symbol}
            </CurrencySymbol>
            <Amount>{selectedCurrencyPrice?.amount}</Amount>
          </PriceDetailsContainer>
          <ToCartButton></ToCartButton>
        </ProductDetailsContainer>
      </ItemContainer>
    </PageWrapper>
  );
}
