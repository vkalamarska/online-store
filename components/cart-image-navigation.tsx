"use client";

import styled from "styled-components";
import ArrowLeft from "../assets/arrow-left.png";
import ArrowRight from "../assets/arrow-right.png";
import { useState } from "react";
import { IProduct } from "@/hooks/useStoreData";

const ProductImage = styled.div<{ imageUrl: string }>`
  height: 100%;
  width: 140px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Navigaton = styled.div`
  display: flex;
  align-items: center;
  grid-column: 3/4;
  grid-row: 5/6;
`;

const LeftArrow = styled.button`
  height: 14px;
  width: 14px;
  margin-right: 5px;
  background-image: url(${ArrowLeft.src});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

const RightArrow = styled.button`
  height: 14px;
  width: 14px;
  background-image: url(${ArrowRight.src});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

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
