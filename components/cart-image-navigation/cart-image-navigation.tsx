"use client";

import { useState } from "react";
import { IProduct } from "@/hooks/useStoreData";
import {
  ProductImage,
  Navigaton,
  LeftArrow,
  RightArrow,
} from "./cart-image-navigation.styles";

interface IProps {
  product: IProduct;
}

const ImageNavigation = ({ product }: IProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickRight = () => {
    if (currentImageIndex === product?.gallery.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handleClickLeft = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(product?.gallery.length - 1);
    } else {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <ProductImage imageUrl={product?.gallery[currentImageIndex]}>
      <Navigaton>
        <LeftArrow onClick={() => handleClickLeft()}></LeftArrow>
        <RightArrow onClick={() => handleClickRight()}></RightArrow>
      </Navigaton>
    </ProductImage>
  );
};

export default ImageNavigation;
