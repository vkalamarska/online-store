import styled from "styled-components";
import Logo from "../assets/logo.png";
import Basket from "../assets/basket.png";
import Currency from "./currency-dropdown";
import { ICategory, ICurrency } from "@/hooks/useStoreData";

const HeaderWrapper = styled.section`
  width: 100%;
  height: 60px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CategoryContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Category = styled.button`
  height: 100%;
  margin-right: 25px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #5ece7b;
    border-bottom: 1px solid #5ece7b;
  }
`;

const LogoButton = styled.button`
  background-image: url(${Logo.src});
  padding: 17px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

const BasketContainer = styled.div`
  display: flex;
  grid-column: 3/4;
  justify-content: flex-end;
`;

const BasketIcon = styled.button`
  background-image: url(${Basket.src});
  padding: 10px;
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

interface IProps {
  categories: ICategory[];
  allCurrencies: ICurrency[];
  currentCurrency: string;
  handleSelectedCurrency: (curr: ICurrency) => void;
}

const Header = ({
  categories,
  allCurrencies,
  currentCurrency,
  handleSelectedCurrency,
}: IProps) => {
  return (
    <HeaderWrapper>
      <CategoryContainer>
        {categories?.map((c) => (
          <Category>{c.name.toUpperCase()}</Category>
        ))}
      </CategoryContainer>
      <LogoButton></LogoButton>
      <BasketContainer>
        <Currency
          allCurrencies={allCurrencies}
          currentCurrency={currentCurrency}
          handleSelectedCurrency={handleSelectedCurrency}
        ></Currency>
        <BasketIcon></BasketIcon>
      </BasketContainer>
    </HeaderWrapper>
  );
};

export default Header;
