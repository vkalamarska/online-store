"use client";

import styled from "styled-components";

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

export {
  CurrencyWrapper,
  ChosenCurrency,
  CurrencyList,
  ListItem,
  CurrencySymbol,
  CurrencyLabel,
};
