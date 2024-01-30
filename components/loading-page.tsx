"use client";

import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const LoadingPageWrapper = styled.div``;

const LoadingPage = () => {
  return (
    <LoadingPageWrapper>
      <TailSpin
        color="#5ece7b"
        width="80"
        visible={true}
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
