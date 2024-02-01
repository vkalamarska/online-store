"use client";

import { IProduct } from "@/hooks/useStoreData";

import {
  ItemContainer,
  ItemImageContainer,
  ItemImage,
  OutOfStock,
  Currency,
  ItemDescription,
  ItemName,
  ItemPriceContainer,
  ItemIPrice,
} from "./product.styles";

interface IProps {
  product: IProduct;
  currentCurrency: string;
}

const Product = ({ product, currentCurrency }: IProps) => {
  const selectedCurrencyPrice = product.prices.find(
    (price) => price.currency.symbol === currentCurrency
  );

  return (
    <ItemContainer href={`/item/${product.id}`} outOfStock={!product.inStock}>
      <ItemImageContainer>
        <ItemImage imageUrl={product.gallery[0]}>
          {!product.inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
        </ItemImage>
      </ItemImageContainer>
      <ItemDescription>
        <ItemName>{product.name}</ItemName>
        <ItemPriceContainer>
          <Currency>{selectedCurrencyPrice?.currency.symbol}</Currency>
          <ItemIPrice>{selectedCurrencyPrice?.amount}</ItemIPrice>
        </ItemPriceContainer>
      </ItemDescription>
    </ItemContainer>
  );
};

export default Product;
