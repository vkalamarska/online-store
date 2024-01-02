import { ICategory, ICurrency, IProduct } from "@/hooks/useStoreData";
import { create } from "zustand";

type ProductStore = {
  categories: ICategory[];
  currencies: ICurrency[];
  products: IProduct[];
  currentCurrency: string;
  currentCategory: string;
  initializeStore: (allCategories: ICategory[]) => void;
  setCurrency: (c: string) => void;
  setCategory: (c: string) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  categories: [],
  currencies: [],
  products: [],
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

      const allProducts = allCategories.flatMap((cat) => cat.products);

      return {
        categories: allCategories,
        currencies: allCurrencies,
        products: allProducts,
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
    [id: string]: string | undefined;
  };
  selectionId: string;
  quantity: number;
}

type CartStore = {
  cartItems: ICartItem[];
  addProductToCart: (p: Omit<ICartItem, "selectionId">) => void;
  updateProductQuantity: (p: ICartItem, type: "increase" | "decrease") => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addProductToCart: (item) =>
    set((store) => {
      const selectionId = `${item.productId}-${JSON.stringify(
        Object.entries(item.attributes).sort((a, b) => a[0].localeCompare(b[0]))
      )}`;

      const itemMatchInCart = store.cartItems.find(
        (item) => item.selectionId === selectionId
      );

      if (itemMatchInCart) {
        const cartWithoutItem = store.cartItems.filter(
          (item) => item.selectionId !== selectionId
        );

        return {
          cartItems: [
            ...cartWithoutItem,
            { ...itemMatchInCart, quantity: itemMatchInCart.quantity + 1 },
          ],
        };
      }

      return {
        cartItems: [...store.cartItems, { ...item, selectionId }],
      };
    }),
  updateProductQuantity: (item, type) =>
    set((store) => {
      const cartWithoutItem = store.cartItems.filter(
        (cartItem) => cartItem.selectionId !== item.selectionId
      );

      if (type === "increase") {
        return {
          cartItems: [
            ...cartWithoutItem,
            { ...item, quantity: item.quantity + 1 },
          ],
        };
      }

      const newQuantity = item.quantity - 1;

      if (newQuantity <= 0) {
        return {
          cartItems: cartWithoutItem,
        };
      }

      return {
        cartItems: [...cartWithoutItem, { ...item, quantity: newQuantity }],
      };
    }),
}));
