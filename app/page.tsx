"use client";

import styled from "styled-components";
import ItemsContainer from "@/components/items-container/items-container";

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
