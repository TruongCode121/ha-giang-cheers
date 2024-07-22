import TittleComponent from "../../TittleComponent";
import * as React from "react";
import Section4Content from "./Section4Content";
import { LgGoogle, LgGreen } from "../../../assets/img/home";
import { styled } from "styled-components";
const BtnLogoStyle = styled.div`
  border-radius: 0.5rem;
  background: var(--Background-Elevation-White, #fff);

  /* Shadow Elevation/08 */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 3.5rem;
  padding: 0.75rem 0;
  img {
  }
`;
const Section4Component = () => {
  return (
    <div className="w-full mt-[2.8rem]">
      <TittleComponent txtHeader="FROM OUR" textStyle2="text-[3.1rem]">
        TRAVELLERS
      </TittleComponent>
      <Section4Content></Section4Content>
      <div className="poppins_font text-[0.9rem] text-center mt-[2rem] mb-[0.3rem]">
        View us on:
      </div>
      <div className="flex justify-center gap-x-4 mb-4">
        <BtnLogoStyle>
          <img src={LgGreen} alt="" className="scale-[0.9]" />
        </BtnLogoStyle>
        <BtnLogoStyle>
          <img src={LgGoogle} alt="" className="scale-[0.6]" />
        </BtnLogoStyle>
      </div>
    </div>
  );
};

export default Section4Component;
