"use client";

import styled from "styled-components";
import { useCartStore, useProductStore } from "@/store/zustand";
import ImageNavigation from "@/components/cart-image-navigation";
import { useState } from "react";
import { iterateObserversSafely } from "@apollo/client/utilities";
import Link from "next/link";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  color: black;
`;

const ItemsSection = styled.div`
  width: 100%;
  margin: 40px 0 70px 0;
  padding: 0 75px;
  display: flex;
  flex-direction: column;
`;

const Cart = styled.div`
  padding-bottom: 30px;
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
  isSelected: boolean;
}>`
  height: 30px;
  width: ${(p) => (p.isColor ? "30px" : "45px")};
  margin-right: 10px;
  border: 1px solid black;
  background-color: white;

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

const TaxWrapper = styled.div`
  margin: 25px 0 5px 0;
  display: flex;
`;

const Tax = styled.span`
  margin-right: 3px;
  font-size: 15px;
`;

const TaxContainer = styled.div`
  display: flex;
`;

const TaxCurrencySymbol = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const TaxAmount = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const FinalQuantityWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const FinalQuantity = styled.span`
  margin-right: 3px;
  font-size: 15px;
`;

const FinalQuantityAmount = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const TotalAmountWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const TotalAmount = styled.span`
  margin-right: 3px;
  font-size: 15px;
`;

const TotalAmountContainer = styled.div`
  display: flex;
`;

const TotalCurrencySymbol = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const TotalAmountValue = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const Order = styled.div`
  height: 40px;
  width: 220px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;
`;

const CartIsEmptyContainer = styled.div`
  margin: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CartIsEmpty = styled.div`
  font-size: 25px;
`;

const GoHomeButton = styled(Link)`
  height: 40px;
  width: 220px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;
`;

export default function CartPage() {
  const { cartItems, updateProductQuantity } = useCartStore();

  const { currentCurrency, products } = useProductStore();

  const totalValue = cartItems.reduce((sum, item) => {
    const itemMatch = products.find(
      (product) => product.id === item.productId
    )!;

    const productCost = itemMatch.prices.find(
      (price) => price.currency.symbol === currentCurrency
    )!;

    return productCost.amount * item.quantity + sum;
  }, 0);

  const totalQuantity = cartItems.reduce((sum, item) => {
    return item.quantity + sum;
  }, 0);

  const isEmpty = totalQuantity === 0;

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
                    <Amount>
                      {selectedCurrencyPrice
                        ? selectedCurrencyPrice.amount * item.quantity
                        : null}
                    </Amount>
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
                              isSelected={item.attributes[a.id] === i.value}
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
        {!isEmpty && (
          <>
            <TaxWrapper>
              <Tax>Tax 21%:</Tax>
              <TaxContainer>
                <TaxCurrencySymbol>{currentCurrency}</TaxCurrencySymbol>
                <TaxAmount>{totalValue * 0.21}</TaxAmount>
              </TaxContainer>
            </TaxWrapper>
            <FinalQuantityWrapper>
              <FinalQuantity>Quantity:</FinalQuantity>
              <FinalQuantityAmount>{totalQuantity}</FinalQuantityAmount>
            </FinalQuantityWrapper>
            <TotalAmountWrapper>
              <TotalAmount>TotalAmount:</TotalAmount>
              <TotalAmountContainer>
                <TotalCurrencySymbol>{currentCurrency}</TotalCurrencySymbol>
                <TotalAmountValue>{totalValue}</TotalAmountValue>
              </TotalAmountContainer>
            </TotalAmountWrapper>
            <Order>Order</Order>
          </>
        )}
        {isEmpty && (
          <CartIsEmptyContainer>
            <CartIsEmpty>Your cart is empty</CartIsEmpty>
            <GoHomeButton href={"/"}>Go home</GoHomeButton>
          </CartIsEmptyContainer>
        )}
      </ItemsSection>
    </PageWrapper>
  );
}
