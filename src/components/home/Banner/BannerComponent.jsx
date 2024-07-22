import React from "react";
import banner from "../../../assets/img/home/Banner/banner.png";
import { styled } from "styled-components";
import BannerHeader from "./BannerHeader";
import BannerHero from "./BannerHero";
import BannerFooter from "./BannerFooter";
const BannerStyless = styled.div`
  background: url(${banner}) lightgray 50% / cover no-repeat;
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  padding-top: 1.5rem;
  position: relative;
`;
const BannerComponent = () => {
  return (
    <BannerStyless>
      <BannerHero></BannerHero>
      <BannerFooter></BannerFooter>
    </BannerStyless>
  );
};

export default BannerComponent;
