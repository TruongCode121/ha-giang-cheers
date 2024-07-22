import React from "react";
import { styled } from "styled-components";
import { mask_weather } from "../../../assets/img/home";
import Section6Content from "./Section6Content";

const OverBgStyle = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    #fff 100%
  );
  height: 20%;
  width: 100%;
  position: absolute; /* top: 0; */
  bottom: 0;
`;

const Section6Component = () => {
  return (
    <div className="w-full relative h-[80vh]">
      <img src={mask_weather} alt="" className="w-full h-[80vh] object-cover" />
      <OverBgStyle></OverBgStyle>
      <Section6Content></Section6Content>
    </div>
  );
};

export default Section6Component;
