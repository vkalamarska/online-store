import { ICategory, IProduct } from "@/hooks/useStoreData";
import styled from "styled-components";

const ItemContainer = styled.div`
  height: 460px;
  width: 380px;
  margin: 10px 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 0px 16px -7px #43464e;
  }
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  height: 90%;
  width: 100%;
  background-image: url(${(p) => p.imageUrl});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  margin: 25px 0 10px 0;
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
}

const Product = ({ product }: IProps) => {
  return (
    <ItemContainer>
      <ItemImage imageUrl={product.gallery[0]}></ItemImage>
      <ItemDescription>
        <ItemName>{product.name}</ItemName>
        <ItemPriceContainer>
          <Currency>{product.prices[0].currency.symbol}</Currency>
          <ItemIPrice>{product.prices[0].amount}</ItemIPrice>
        </ItemPriceContainer>
      </ItemDescription>
    </ItemContainer>
  );
};

export default Product;
