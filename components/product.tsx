import { IProduct } from "@/hooks/useStoreData";
import styled from "styled-components";
import ShoppingCart from "../assets/to-shopping-cart.png";

const ToShoppingCart = styled.div`
  height: 55px;
  width: 55px;
  visibility: hidden;
  display: flex;
  justify-content: flex-end;
  grid-column: 5/6;
  grid-row: 6/7;
  z-index: 3;
  background-image: url(${ShoppingCart.src});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemContainer = styled.div<{ outOfStock: boolean }>`
  height: 460px;
  width: 370px;
  margin: 10px 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 16px -7px #43464e;
    ${ToShoppingCart} {
      visibility: visible;
    }
  }

  ${(p) =>
    p.outOfStock &&
    `
      filter: grayscale(90%) opacity(40%);
      cursor: auto;
    `}
`;

const ItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  height: 95%;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 7;
  background-image: url(${(p) => p.imageUrl});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
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
    <ItemContainer outOfStock={!product.inStock}>
      <ItemImageContainer>
        <ItemImage imageUrl={product.gallery[0]}>
          {!product.inStock && <OutOfStock>OUT OF STOCK</OutOfStock>}
        </ItemImage>
        {product.inStock && <ToShoppingCart></ToShoppingCart>}
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
