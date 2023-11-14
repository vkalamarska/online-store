import styled from "styled-components";
import Header from "./header";
import { useQuery, gql } from "@apollo/client";
import ItemsContainer from "./items-container";
import { useEffect, useState } from "react";
import useStoreData, { ICurrency } from "@/hooks/useStoreData";

const StoreWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const StoreExplorer = () => {
  const { data, loading, error } = useStoreData();

  const [currentCurrency, setCurrentCurrency] = useState("");

  useEffect(() => {
    const initialUnit =
      data?.categories[0].products[0].prices[0].currency?.symbol;
    if (!initialUnit) return;
    setCurrentCurrency(initialUnit);
  }, [data]);

  const allCurrencies =
    data?.categories[0].products[0].prices.map((price) => price.currency) || [];

  const handleSelectedCurrency = (currency: ICurrency) => {
    setCurrentCurrency(currency.symbol);
  };

  if (loading || !data) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <StoreWrapper>
      <Header
        categories={data.categories}
        allCurrencies={allCurrencies}
        currentCurrency={currentCurrency}
        handleSelectedCurrency={handleSelectedCurrency}
      />
      <ItemsContainer
        categories={data.categories}
        currentCurrency={currentCurrency}
      />
    </StoreWrapper>
  );
};

export default StoreExplorer;
