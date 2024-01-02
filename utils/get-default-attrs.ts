import { IProduct } from "@/hooks/useStoreData";

export interface IAttributeState {
  [attributeId: string]: string | undefined;
}

const getDefaultAttrs = (product: IProduct | undefined): IAttributeState => {
  if (!product) return {};

  return product.attributes.reduce<IAttributeState>(
    (state, attr) => ({ ...state, [attr.id]: undefined }),
    {}
  );
};

export default getDefaultAttrs;
