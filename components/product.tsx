"use client";

import { IProduct } from "@/hooks/useStoreData";
import styled from "styled-components";
import Link from "next/link";

const ItemContainer = styled(Link)<{ outOfStock: boolean }>`
  height: 400px;
  width: 340px;
  margin: 10px 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 16px -7px #43464e;
  }

  ${(p) =>
    p.outOfStock &&
    `
      filter: grayscale(90%) opacity(40%);
    `}
`;

const ItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  height: 95%;
  width: 100%;
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const OutOfStock = styled.span`
  display: flex;
  position: relative;
  top: 50%;
  justify-content: center;
  font-size: 20px;
  z-index: 2;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #1d1f22;
`;

const ItemPriceContainer = styled.span`
  display: flex;
`;

const Currency = styled.span`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const ItemIPrice = styled.span`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

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
