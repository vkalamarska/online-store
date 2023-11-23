"use client";

import { ICurrency } from "@/hooks/useStoreData";
import styled from "styled-components";
import { useState } from "react";

const CurrencyWrapper = styled.div``;

const ChosenCurrency = styled.div`
  margin: 0 22px;
  color: #1d1f22;
  font-size: 16px;
  cursor: pointer;
`;

const CurrencyList = styled.ul`
  position: absolute;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  color: #1d1f22;
  display: flex;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;

const CurrencySymbol = styled.div`
  margin-right: 10px;
  font-size: 16px;
`;

const CurrencyLabel = styled.div`
  font-size: 16px;
`;

interface IProps {
  allCurrencies: ICurrency[];
  currentCurrency: string;
  handleSelectedCurrency: (curr: string) => void;
}

const Currency = ({
  allCurrencies,
  currentCurrency,
  handleSelectedCurrency,
}: IProps) => {
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
                handleSelectedCurrency(c.symbol);
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
