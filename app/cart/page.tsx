"use client";

import { useCartStore, useProductStore } from "@/store/zustand";
import ImageNavigation from "@/components/cart-image-navigation/cart-image-navigation";
import {
  PageWrapper,
  ItemsSection,
  Cart,
  ProductContainer,
  LeftSection,
  Brand,
  ProductName,
  PriceDetailsContainer,
  CurrencySymbol,
  Amount,
  Attributes,
  AttributeName,
  AttributeContainer,
  AttributeItems,
  RightSection,
  QuantityContainer,
  PlusButtonContainer,
  Quantity,
  MinusButtonContainer,
  TaxWrapper,
  Tax,
  TaxContainer,
  TaxCurrencySymbol,
  TaxAmount,
  FinalQuantityWrapper,
  FinalQuantity,
  FinalQuantityAmount,
  TotalAmountWrapper,
  TotalAmount,
  TotalAmountContainer,
  TotalCurrencySymbol,
  TotalAmountValue,
  Order,
  CartIsEmptyContainer,
  CartIsEmpty,
  GoHomeButton,
} from "./page.styles";
import LoadingPage from "@/components/loading-page/loading-page";

export default function CartPage() {
  const { cartItems, updateProductQuantity } = useCartStore();

  const { currentCurrency, products } = useProductStore();

  if (!products.length && !currentCurrency) {
    return <LoadingPage />;
  }

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
          ?.sort((a, b) => a.selectionId.localeCompare(b.selectionId))
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
                        ? (
                            selectedCurrencyPrice.amount * item.quantity
                          ).toFixed(2)
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
                <TaxAmount>{(totalValue * 0.21).toFixed(2)}</TaxAmount>
              </TaxContainer>
            </TaxWrapper>
            <FinalQuantityWrapper>
              <FinalQuantity>Quantity:</FinalQuantity>
              <FinalQuantityAmount>{totalQuantity}</FinalQuantityAmount>
            </FinalQuantityWrapper>
            <TotalAmountWrapper>
              <TotalAmount>Total amount:</TotalAmount>
              <TotalAmountContainer>
                <TotalCurrencySymbol>{currentCurrency}</TotalCurrencySymbol>
                <TotalAmountValue>{totalValue.toFixed(2)}</TotalAmountValue>
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
