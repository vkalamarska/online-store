import { gql, useQuery } from "@apollo/client";

export interface ICategory {
  name: string;
  products: IProduct[];
}

export interface IProduct {
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
  currency: ICurrency;
  amount: number;
}

export interface ICurrency {
  label: string;
  symbol: string;
}

const useStoreData = () =>
  useQuery<{ categories: ICategory[] }>(CATEGORIES_QUERY);

export default useStoreData;

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
