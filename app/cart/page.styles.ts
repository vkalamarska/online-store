"use client";

import styled from "styled-components";
import Link from "next/link";
import { device } from "@/utils/device";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

const ItemsSection = styled.div`
  width: 100%;
  margin: 40px 0 70px 0;
  padding: 0 75px;
  display: flex;
  flex-direction: column;

  @media ${device.largeDesktop} {
    margin: 75px 0;
    padding: 0 400px;
  }

  @media ${device.tablet} {
    margin: 35px 0 50px 0;
    padding: 0 35px;
    justify-content: space-between;
  }

  @media ${device.mobile} {
    margin: 35px 0;
    padding: 0 15px;
  }
`;

const Cart = styled.div`
  padding-bottom: 30px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;

  @media ${device.mobile} {
    padding-bottom: 20px;
    font-size: 18px;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;

  @media ${device.largeDesktop} {
    padding: 30px 0;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Brand = styled.div`
  font-size: 22px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 28px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const ProductName = styled.div`
  margin: 3px 0 16px 0;
  font-size: 22px;

  @media ${device.largeDesktop} {
    margin-bottom: 18px;
    font-size: 28px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const PriceDetailsContainer = styled.div`
  display: flex;
`;

const CurrencySymbol = styled.div`
  margin-right: 5px;
  font-size: 18px;
  color: black;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 22px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const Amount = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: black;
  font-weight: bold;

  @media ${device.largeDesktop} {
    margin-bottom: 18px;
    font-size: 22px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const Attributes = styled.div``;

const AttributeName = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: bold;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const AttributeContainer = styled.div`
  margin-bottom: 16px;
  display: flex;

  @media ${device.largeDesktop} {
    margin-bottom: 18px;
  }

  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;

const AttributeItems = styled.button<{
  isColor: boolean;
  backgroundColor: string;
  isSelected: boolean;
}>`
  height: 30px;
  width: ${(p) => (p.isColor ? "30px" : "45px")};
  margin-right: 10px;
  border: 1px solid black;
  background-color: white;

  ${(p) =>
    p.isColor &&
    `
     background-color: ${p.backgroundColor};
  `}

  ${(p) =>
    p.isSelected &&
    !p.isColor &&
    `
     background-color: black;
     color:white;
  `}

${(p) =>
    p.isSelected &&
    p.isColor &&
    `
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  `}

@media ${device.mobile} {
    height: 20px;
    width: ${(p) => (p.isColor ? "20px" : "30px")};
    margin-right: 6px;
    font-size: 8px;
  }
`;

const RightSection = styled.div`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

const QuantityContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.largeDesktop} {
    margin-right: 50px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 0 10px 0;
  }
`;

const PlusButtonContainer = styled.button`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;

  @media ${device.mobile} {
    height: 20px;
    width: 20px;
    font-size: 10px;
  }
`;

const Quantity = styled.div`
  align-self: center;
  font-size: 12px;

  @media ${device.largeDesktop} {
    font-size: 15px;
  }
`;

const MinusButtonContainer = styled.button`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid black;
  align-items: center;
  cursor: pointer;

  @media ${device.mobile} {
    height: 20px;
    width: 20px;
    font-size: 10px;
  }
`;

const TaxWrapper = styled.div`
  margin: 25px 0 5px 0;
  display: flex;
`;

const Tax = styled.span`
  margin-right: 3px;
  font-size: 15px;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const TaxContainer = styled.div`
  display: flex;
`;

const TaxCurrencySymbol = styled.span`
  font-size: 15px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const TaxAmount = styled.span`
  font-size: 15px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const FinalQuantityWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const FinalQuantity = styled.span`
  margin-right: 3px;
  font-size: 15px;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const FinalQuantityAmount = styled.span`
  font-size: 15px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const TotalAmountWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const TotalAmount = styled.span`
  margin-right: 3px;
  font-size: 15px;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const TotalAmountContainer = styled.div`
  display: flex;
`;

const TotalCurrencySymbol = styled.span`
  font-size: 15px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const TotalAmountValue = styled.span`
  font-size: 15px;
  font-weight: bold;

  @media ${device.largeDesktop} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const Order = styled.div`
  height: 40px;
  width: 220px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;

  @media ${device.mobile} {
    height: 28px;
    width: 40%;
    font-size: 12px;
  }
`;

const CartIsEmptyContainer = styled.div`
  margin: 45px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CartIsEmpty = styled.div`
  font-size: 25px;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const GoHomeButton = styled(Link)`
  height: 40px;
  width: 220px;
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #5ece7b;
  color: white;
  cursor: pointer;
`;

export {
  PageWrapper,
  ItemsSection,
  Cart,
  ProductContainer,
  LeftSection,
  Brand,
  ProductName,
  PriceDetailsContainer,
  CurrencySymbol,
  Amount,
  Attributes,
  AttributeName,
  AttributeContainer,
  AttributeItems,
  RightSection,
  QuantityContainer,
  PlusButtonContainer,
  Quantity,
  MinusButtonContainer,
  TaxWrapper,
  Tax,
  TaxContainer,
  TaxCurrencySymbol,
  TaxAmount,
  FinalQuantityWrapper,
  FinalQuantity,
  FinalQuantityAmount,
  TotalAmountWrapper,
  TotalAmount,
  TotalAmountContainer,
  TotalCurrencySymbol,
  TotalAmountValue,
  Order,
  CartIsEmptyContainer,
  CartIsEmpty,
  GoHomeButton,
};
