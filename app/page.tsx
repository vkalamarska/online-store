"use client";

import styled from "styled-components";
import ItemsContainer from "@/components/items-container/items-container";
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
  return (
    <StoreWrapper>
      <ItemsContainer />
    </StoreWrapper>
  );
};

export default StoreExplorer;
