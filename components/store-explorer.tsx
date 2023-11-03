import styled from "styled-components";
import Header from "./header";
import { useQuery, gql } from "@apollo/client";
import Product from "./product";

const StoreWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

interface IApiResponse {
  name: string;
  products: IProduct[];
}

interface IProduct {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;
  attributes: IAttribute[];
  prices: IPrices[];
  brand: string;
}

interface IAttribute {
  id: string;
  name: string;
  type: string;
  items: IItem[];
}

interface IItem {
  displayValue: string;
  value: string;
  id: string;
}

interface IPrices {
  currency: {
    label: string;
    symbol: string;
  };
  amount: number;
}

const StoreExplorer = () => {
  const CATEGORIES_QUERY = gql`
    {
      categories {
        name
        products {
          id
          name
          inStock
          gallery
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      }
    }
  `;

  const { data, loading, error } = useQuery<{ categories: IApiResponse[] }>(
    CATEGORIES_QUERY
  );

  if (loading) return <div>Loading</div>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <StoreWrapper>
      <Header />
      <ItemsWrapper>
        {data?.categories[0].products.map((p) => (
          <Product product={p} />
        ))}
      </ItemsWrapper>
    </StoreWrapper>
  );
};

export default StoreExplorer;
