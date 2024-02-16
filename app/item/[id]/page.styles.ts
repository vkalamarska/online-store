"use client";

import styled from "styled-components";
import { device } from "@/utils/device";

const PageWrapper = styled.section`
  width: 100%;
  min-height: 100%;
`;

const ItemContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 0 75px;
  display: flex;
  justify-content: center;

  @media ${device.largeDesktop} {
    margin: 75px 0;
    padding: 0 300px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
  }

  @media ${device.tablet} {
    margin: 35px 0;
    padding: 0 35px;
    justify-content: space-between;
  }

  @media ${device.mobile} {
    margin: 35px 0;
    padding: 0 15px;
    flex-direction: column;
  }
`;

const ItemImage = styled.div<{ imageUrl: string }>`
  width: 400px;
  height: 400px;
  margin-right: 130px;
  background-image: url(${(p) => p.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.largeDesktop} {
    width: 500px;
    height: 500px;
    margin-right: 180px;
  }

  @media ${device.tablet} {
    margin-right: 0;
    width: 300px;
    height: 300px;
  }

  @media ${device.mobile} {
    margin: 10px 0;
    width: 100%;
    height: 300px;
  }
`;

const ImagesContainer = styled.div`
  width: 130px;
  height: 400px;
  margin-right: 130px;
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

  @media ${device.largeDesktop} {
    width: 190px;
    height: 500px;
    margin-right: 180px;
  }

  @media ${device.tablet} {
    margin-right: 0;
    width: 100px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 80px;
    margin: 0 0 15px 0;
    padding: 0 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      width: 100%;
      height: 6px;
      background-color: #f0f0f0;
      border-radius: 4px;
    }
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

  @media ${device.mobile} {
    margin: 0 2px;
    width: 70px;
    height: 70px;
  }
`;

export { PageWrapper, ItemContainer, ItemImage, ImagesContainer, Images };
