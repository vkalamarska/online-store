"use client";

import styled from "styled-components";
import { useProductStore } from "@/store/zustand";
import { useParams } from "next/navigation";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  color: black;
`;

const ItemContainer = styled.div`
  margin: 40px 0;
  padding: 50px;
  display: flex;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  width: 400px;
  height: 400px;
  background-image: url(${(p) => p.imageUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function ItemPage() {
  const { id: productId } = useParams();

  const { categories, currentCategory: currentCategoryName } =
    useProductStore();

  const selectedCategory = categories.find(
    (category) => category.name === currentCategoryName
  );

  const selectedProduct = selectedCategory?.products.find(
    (product) => product.id === productId
  );

  return (
    <PageWrapper>
      <ItemContainer>
        <ItemImage imageUrl={selectedProduct?.gallery[0] || ""}></ItemImage>
      </ItemContainer>
    </PageWrapper>
  );
}
