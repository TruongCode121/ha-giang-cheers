import React from "react";
import { styled } from "styled-components";
import { mask_weather } from "../../../assets/img/home";
import Section5Content from "./Section5Content";

const Section5Style = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 6.25rem;
`;
const Section5Component = () => {
  return (
    <Section5Style>
      <Section5Content></Section5Content>
    </Section5Style>
  );
};

export default Section5Component;
