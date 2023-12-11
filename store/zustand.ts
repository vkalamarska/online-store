import { ICategory, ICurrency, IProduct } from "@/hooks/useStoreData";
import { create } from "zustand";

type ProductStore = {
  categories: ICategory[];
  currencies: ICurrency[];
  currentCurrency: string;
  currentCategory: string;
  initializeStore: (allCategories: ICategory[]) => void;
  setCurrency: (c: string) => void;
  setCategory: (c: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  categories: [],
  currencies: [],
  currentCurrency: "",
  currentCategory: "",
  initializeStore: (allCategories) =>
    set(() => {
      const allCurrencies =
        allCategories[0].products[0].prices.map((price) => price.currency) ||
        [];

      const initialCurrency =
        allCategories[0].products[0].prices[0].currency.symbol;
      const initialCategory = allCategories[0].name;

      return {
        categories: allCategories,
        currencies: allCurrencies,
        currentCurrency: initialCurrency,
        currentCategory: initialCategory,
      };
    }),
  setCategory: (category) => set(() => ({ currentCategory: category })),
  setCurrency: (currency) => set(() => ({ currentCurrency: currency })),
}));

interface ICartItem {
  productId: string;
  attributes: {
    id: string;
    selectedValue: string | undefined;
  }[];
  selectionId: string;
  quantity: number;
}

type CartStore = {
  cartItems: ICartItem[];
  quantity: number;
  addProductToCart: (p: Omit<ICartItem, "selectionId">) => void;
  updateProductQuantity: (p: ICartItem) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addProductToCart: (item) =>
    set((store) => {
      const selectionId = `${item.productId}-${JSON.stringify(
        attributes.sort((a, b) => a.id > b.id)
      )}`;

      return { cartItems: [...store.cartItems, { ...item, selectionId }] };
    }),
  updateProductQuantity: (product) =>
    set((store) => {
      return {};
    }),
}));
