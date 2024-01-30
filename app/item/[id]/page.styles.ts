"use client";

import styled from "styled-components";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: white;
  display: flex;
  color: black;
`;

const ItemContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 0 75px;
  display: flex;
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  width: 400px;
  height: 400px;
  margin-right: 120px;
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const ImagesContainer = styled.div`
  width: 130px;
  height: 400px;
  margin-right: 120px;
  padding-right: 15px;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5ece7cda;
    border-radius: 10px;
    border: 0px solid #ffffff;
  }
`;

const Images = styled.div<{ imagesUrl: string }>`
  margin: 5px 0;
  height: 130px;
  background-size: 100%;
  background-image: url(${(p) => p.imagesUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

export { PageWrapper, ItemContainer, ItemImage, ImagesContainer, Images };
