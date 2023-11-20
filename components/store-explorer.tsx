import styled from "styled-components";
import Header from "./header";
import ItemsContainer from "./items-container";
import { useEffect, useState } from "react";
import useStoreData, { ICategory, ICurrency } from "@/hooks/useStoreData";

const StoreWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const StoreExplorer = () => {
  const { data, loading, error } = useStoreData();

  const [currentCurrency, setCurrentCurrency] = useState("");

  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const initialUnit =
      data?.categories[0].products[0].prices[0].currency?.symbol;
    if (!initialUnit) return;
    setCurrentCurrency(initialUnit);
  }, [data]);

  useEffect(() => {
    const initialCategory = data?.categories[0].name;
    if (!initialCategory) return;
    setCurrentCategory(initialCategory);
  }, [data]);

  const allCurrencies =
    data?.categories[0].products[0].prices.map((price) => price.currency) || [];

  const handleSelectedCurrency = (currency: ICurrency) => {
    setCurrentCurrency(currency.symbol);
  };

  const handleSelectedCategory = (category: ICategory) => {
    setCurrentCategory(category.name);
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
        handleSelectedCategory={handleSelectedCategory}
      />
      <ItemsContainer
        categories={data.categories}
        currentCurrency={currentCurrency}
        currentCategory={currentCategory}
      />
    </StoreWrapper>
  );
};

export default StoreExplorer;
