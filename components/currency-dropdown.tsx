import { ICurrency } from "@/hooks/useStoreData";
import styled from "styled-components";
import { useState } from "react";

const CurrencyWrapper = styled.div``;

const ChosenCurrency = styled.div`
  margin: 0 16px;
  color: #1d1f22;
  font-size: 18px;
  cursor: pointer;
`;

const CurrencyList = styled.ul`
  position: absolute;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;

const CurrencySymbol = styled.div`
  margin-right: 10px;
`;

const CurrencyLabel = styled.div``;

interface IProps {
  allCurrencies: ICurrency[];
  currentCurrency: string;
  handleSelectedCurrency: (curr: ICurrency) => void;
}

const Currency = ({
  allCurrencies,
  currentCurrency,
  handleSelectedCurrency,
}: IProps) => {
  console.log(allCurrencies);

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <CurrencyWrapper>
      <ChosenCurrency onClick={toggling}>{currentCurrency}</ChosenCurrency>
      {isOpen && (
        <CurrencyList>
          {allCurrencies.map((c) => (
            <ListItem
              onClick={() => {
                handleSelectedCurrency(c);
                setIsOpen(false);
              }}
            >
              <CurrencySymbol>{c.symbol}</CurrencySymbol>
              <CurrencyLabel>{c.label}</CurrencyLabel>
            </ListItem>
          ))}
        </CurrencyList>
      )}
    </CurrencyWrapper>
  );
};

export default Currency;
