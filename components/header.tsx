import styled from "styled-components";
import Logo from "../assets/logo.png";
import Basket from "../assets/basket.png";

const HeaderWrapper = styled.section`
  width: 100%;
  height: 70px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 14px -10px #43464e;
`;

const CategoryContainer = styled.div`
  height: 100%;
`;

const Category = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;

  &:hover {
    color: #5ece7b;
    border-bottom: 1px solid #5ece7b;
  }
`;

const LogoButton = styled.button`
  background-image: url(${Logo.src});
  padding: 15px;
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;

const BasketContainer = styled.div`
  display: flex;
`;

const Currency = styled.button`
  margin: 0 5px;
  padding: 10px;
  color: black;
  background-color: transparent;
  border: none;
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

const Header = () => {
  return (
    <HeaderWrapper>
      <CategoryContainer>
        <Category>CLOTHES</Category>
      </CategoryContainer>
      <LogoButton></LogoButton>
      <BasketContainer>
        <Currency>$</Currency>
        <BasketIcon></BasketIcon>
      </BasketContainer>
    </HeaderWrapper>
  );
};

export default Header;
