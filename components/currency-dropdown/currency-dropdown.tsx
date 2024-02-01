"use client";

import { ICurrency } from "@/hooks/useStoreData";

import { useState } from "react";
import {
  CurrencyWrapper,
  ChosenCurrency,
  CurrencyList,
  ListItem,
  CurrencySymbol,
  CurrencyLabel,
} from "./currency-dropdown.styles";

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
