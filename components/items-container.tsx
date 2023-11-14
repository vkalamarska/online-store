import styled from "styled-components";
import Product from "./product";
import { ICategory } from "@/hooks/useStoreData";

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

interface IProps {
  categories: ICategory[];
  currentCurrency: string;
}

const ItemsContainer = ({ categories, currentCurrency }: IProps) => {
  return (
    <ItemsWrapper>
      {categories[0]?.products.map((p) => (
        <Product product={p} />
      ))}
    </ItemsWrapper>
  );
};

export default ItemsContainer;
