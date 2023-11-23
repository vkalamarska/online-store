"use client";

import styled from "styled-components";

const ItemPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const ItemContainer = styled.div`
  padding: 50px;
  display: flex;
`;

const ItemPageExplorer = () => {
  return (
    <ItemPageWrapper>
      <ItemContainer></ItemContainer>
    </ItemPageWrapper>
  );
};

export default ItemPageExplorer;
