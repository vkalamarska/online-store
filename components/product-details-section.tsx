"use client";

import { IPrices, IProduct } from "@/hooks/useStoreData";
import { useCartStore } from "@/store/zustand";
import getDefaultAttrs, { IAttributeState } from "@/utils/get-default-attrs";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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
  margin-bottom: 25px;
  display: flex;
`;

const AttributeItems = styled.button<{
  isColor: boolean;
  backgroundColor: string;
  isSelected: boolean;
}>`
  height: 30px;
  width: ${(p) => (p.isColor ? "30px" : "45px")};
  margin-right: 10px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;

  ${(p) =>
    p.isColor &&
    `
       background-color: ${p.backgroundColor};
    `}

  ${(p) =>
    p.isSelected &&
    !p.isColor &&
    `
       background-color: black;
       color:white;
    `}

  ${(p) =>
    p.isSelected &&
    p.isColor &&
    `
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    `}

  &:hover {
    background-color: ${(p) => (p.isColor ? p.backgroundColor : "black")};
    color: white;
    box-shadow: ${(p) =>
      p.isColor ? "0px 0px 3px 0px rgba(0,0,0,0.75)" : "none"};
  }
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
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: bold;
`;

const ToCartButton = styled.button<{ outOfStock: boolean }>`
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  border: none;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;

  ${(p) =>
    p.outOfStock &&
    `
      filter: grayscale(60%) opacity(60%);
      cursor: auto;
    `}
`;

const Description = styled.div`
  font-size: 10px;
`;

interface IProps {
  selectedProduct: IProduct;
  selectedCurrencyPrice: IPrices;
}

const ProductDetailsSection = ({
  selectedProduct,
  selectedCurrencyPrice,
}: IProps) => {
  const [attributes, setAttributes] = useState<IAttributeState>(
    getDefaultAttrs(selectedProduct)
  );

  const allAttributesSelected = Object.values(attributes).every(Boolean);

  const { addProductToCart } = useCartStore();

  return (
    <ProductDetailsContainer>
      <Brand>{selectedProduct?.brand}</Brand>
      <ProductName>{selectedProduct?.name}</ProductName>
      {selectedProduct?.attributes.map((a, i) => (
        <Attributes key={`${a.id}-${i}`}>
          <AttributeName>{a.name}:</AttributeName>
          <AttributeContainer>
            {a.items.map((item, index) => {
              const isColor = item.value.includes("#");
              return (
                <AttributeItems
                  key={`${item.id}-${index}`}
                  isColor={isColor}
                  backgroundColor={item.value}
                  isSelected={attributes[a.id] === item.value}
                  onClick={() =>
                    setAttributes((prev) => ({ ...prev, [a.id]: item.value }))
                  }
                >
                  {!item.value.includes("#") && item.value}
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
      <ToCartButton
        outOfStock={!allAttributesSelected || !selectedProduct?.inStock}
        onClick={() => {
          addProductToCart({
            productId: selectedProduct?.id,
            quantity: 1,
            attributes,
          });
          toast("Added to the cart");
        }}
      >
        {selectedProduct?.inStock ? "ADD TO CART" : "OUT OF STOCK"}
      </ToCartButton>
      <Description
        dangerouslySetInnerHTML={{ __html: selectedProduct?.description || "" }}
      ></Description>
    </ProductDetailsContainer>
  );
};

export default ProductDetailsSection;
