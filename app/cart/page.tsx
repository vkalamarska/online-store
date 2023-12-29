"use client";

import styled from "styled-components";
import PlusButton from "../../assets/plus-button.png";
import MinusButton from "../../assets/minus-button.png";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import { useState } from "react";
import { useCartStore, useProductStore } from "@/store/zustand";
import ImageNavigation from "@/components/cart-image-navigation";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  color: black;
`;

const ItemsSection = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 0 75px;
  display: flex;
  flex-direction: column;
`;

const Cart = styled.div`
  padding-bottom: 40px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;
`;

const ProductContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const ProductName = styled.div`
  margin: 3px 0 16px 0;
  font-size: 22px;
`;

const PriceDetailsContainer = styled.div`
  display: flex;
`;

const CurrencySymbol = styled.div`
  margin-right: 5px;
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const Amount = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const Attributes = styled.div``;

const AttributeName = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: bold;
`;

const AttributeContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
`;

const AttributeItems = styled.button<{
  isColor: boolean;
  backgroundColor: string;
}>`
  height: 30px;
  width: ${(p) => (p.isColor ? "30px" : "45px")};
  margin-right: 10px;
  border: 1px solid black;
  background-color: ${(p) => (p.isColor ? p.backgroundColor : "white")};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.isColor ? p.backgroundColor : "black")};
    color: white;
    box-shadow: ${(p) =>
      p.isColor ? "0px 0px 2px 0px rgba(0,0,0,0.75)" : "none"};
  }
`;

const RightSection = styled.div`
  display: flex;
`;

const QuantityContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlusButtonContainer = styled.button`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

const Quantity = styled.div`
  align-self: center;
  font-size: 12px;
`;

const MinusButtonContainer = styled.button`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid black;
  align-items: center;
  cursor: pointer;
`;

export default function CartPage() {
  const { cartItems, updateProductQuantity } = useCartStore();

  const { currentCurrency, products } = useProductStore();

  return (
    <PageWrapper>
      <ItemsSection>
        <Cart>CART</Cart>
        {cartItems
          ?.sort((a, b) => a.productId.localeCompare(b.productId))
          .map((item) => {
            const product = products.find(
              (product) => item.productId === product.id
            );

            if (!product) return null;

            const selectedCurrencyPrice = product.prices.find(
              (price) => price.currency.symbol === currentCurrency
            );
            return (
              <ProductContainer>
                <LeftSection>
                  <Brand>{product.brand}</Brand>
                  <ProductName>{product.name}</ProductName>
                  <PriceDetailsContainer>
                    <CurrencySymbol>
                      {selectedCurrencyPrice?.currency.symbol}
                    </CurrencySymbol>
                    <Amount>{selectedCurrencyPrice?.amount}</Amount>
                  </PriceDetailsContainer>
                  {product?.attributes.map((a) => (
                    <Attributes>
                      <AttributeName>{a.name}:</AttributeName>
                      <AttributeContainer>
                        {a.items.map((i) => {
                          const isColor = i.value.includes("#");
                          return (
                            <AttributeItems
                              isColor={isColor}
                              backgroundColor={i.value}
                            >
                              {!i.value.includes("#") && i.value}
                            </AttributeItems>
                          );
                        })}
                      </AttributeContainer>
                    </Attributes>
                  ))}
                </LeftSection>
                <RightSection>
                  <QuantityContainer>
                    <PlusButtonContainer
                      onClick={() => updateProductQuantity(item, "increase")}
                    >
                      +
                    </PlusButtonContainer>
                    <Quantity>{item.quantity}</Quantity>
                    <MinusButtonContainer
                      onClick={() => updateProductQuantity(item, "decrease")}
                    >
                      -
                    </MinusButtonContainer>
                  </QuantityContainer>
                  <ImageNavigation product={product}></ImageNavigation>
                </RightSection>
              </ProductContainer>
            );
          })}
      </ItemsSection>
    </PageWrapper>
  );
}
