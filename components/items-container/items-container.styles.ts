"use client";

import styled from "styled-components";
import { device } from "@/utils/device";

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 75px;

  @media ${device.largeDesktop} {
    padding: 75px 350px;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 25px 35px;
    justify-content: space-around;
  }

  @media ${device.mobile} {
    padding: 25px 15px;
    justify-content: space-around;
  }
`;

export { ItemsWrapper };
