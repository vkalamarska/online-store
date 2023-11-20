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
  currentCategory: string;
}

const ItemsContainer = ({
  categories,
  currentCurrency,
  currentCategory,
}: IProps) => {
  const selectedCategory = categories.find(
    (category) => category.name === currentCategory
  );

  return (
    <ItemsWrapper>
      {selectedCategory?.products.map((p) => (
        <Product product={p} currentCurrency={currentCurrency} />
      ))}
    </ItemsWrapper>
  );
};

export default ItemsContainer;
