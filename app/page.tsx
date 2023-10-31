"use client";

import StoreExplorer from "@/components/store-explorer";
import styled from "styled-components";

const AppWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

export default function Home() {
  return (
    <AppWrapper>
      <StoreExplorer></StoreExplorer>
    </AppWrapper>
  );
}
