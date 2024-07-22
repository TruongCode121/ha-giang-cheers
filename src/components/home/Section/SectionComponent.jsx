import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

import SectionContent from "./SectionContent";
import SectionHero from "./SectionHero";

const SectionStyless = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-bottom: 6.25rem;
`;

const SectionComponent = () => {
  return (
    <SectionStyless className="overflow-hidden">
      <SectionContent></SectionContent>
      <SectionHero></SectionHero>
    </SectionStyless>
  );
};

export default SectionComponent;
