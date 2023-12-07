"use client";

import styled from "styled-components";
import ItemsContainer from "@/components/items-container";
import { useEffect } from "react";
import useStoreData from "@/hooks/useStoreData";
import { useProductStore } from "@/store/zustand";

const StoreWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const StoreExplorer = () => {
  const { data, loading, error } = useStoreData();
  const { initializeStore, categories } = useProductStore();

  useEffect(() => {
    if (!data?.categories || categories.length) return;

    initializeStore(data.categories);
  }, [data]);

  if (loading || !data) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <StoreWrapper>
      <ItemsContainer />
    </StoreWrapper>
  );
};

export default StoreExplorer;
