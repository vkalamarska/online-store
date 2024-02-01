"use client";

import { TailSpin } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoadingPage;
