"use client";

import { IPrices, IProduct } from "@/hooks/useStoreData";
import { useCartStore } from "@/store/zustand";
import getDefaultAttrs, { IAttributeState } from "@/utils/get-default-attrs";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  ProductDetailsContainer,
  Brand,
  ProductName,
  Attributes,
  AttributeName,
  AttributeContainer,
  AttributeItems,
  Price,
  PriceDetailsContainer,
  CurrencySymbol,
  Amount,
  ToCartButton,
  Description,
} from "./product-details-section.styles";

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
