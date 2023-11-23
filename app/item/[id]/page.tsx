"use client";

import ItemPageExplorer from "@/components/item-page-explorer";
import styled from "styled-components";

const ItemPageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

export default function ItemPage() {
  return (
    <ItemPageWrapper>
      <ItemPageExplorer />
    </ItemPageWrapper>
  );
}
