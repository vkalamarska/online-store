import styled from "styled-components";
import Logo from "../assets/a-logo.png";

const StoreWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const Header = styled.section`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 14px -10px #43464e;
`;

const CategoryContainer = styled.div`
  display: flex;
`;

const Category = styled.div`
  font-size: 14px;
  color: black;

  &:hover {
    color: #5ece7b;
  }
`;

const LogoButton = styled.button`
  background-image: url(${Logo.src});
  padding: 20px;
  background-color: transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const ItemContainer = styled.div`
  height: 444px;
  width: 386px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  &:hover {
    box-shadow: 0px 0px 14px -8px #43464e;
  }
`;

const ItemImage = styled.div`
  height: 80%;
  width: 100%;
`;
const ItemName = styled.span`
  margin: 25px 0 10px 0;
  font-size: 18px;
  color: #1d1f22;
`;

const ItemPrice = styled.span`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const StoreExplorer = () => {
  return (
    <StoreWrapper>
      <Header>
        <CategoryContainer>
          <Category>CLOTHES</Category>
        </CategoryContainer>
        <LogoButton></LogoButton>
      </Header>
      <ItemsWrapper>
        <ItemContainer>
          <ItemImage></ItemImage>
          <ItemName>Apollo Running Short</ItemName>
          <ItemPrice>$50</ItemPrice>
        </ItemContainer>
      </ItemsWrapper>
    </StoreWrapper>
  );
};

export default StoreExplorer;
