import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  BgButton2,
  BusIconSection2,
  Card1,
  HomeIconSection2,
  HumanIconSection2,
} from "../../../assets/img/home";
import { ButtonItem } from "../../Button";
import { styled } from "styled-components";
import ItemSubContent from "./ItemSubContent";
const Section2CardStyle = styled.div`
  box-shadow: -16px -16px 32px 0px rgba(0, 0, 0, 0.04),
    6px 6px 32px 0px rgba(0, 0, 0, 0.04);
`;
const Section2Card = ({ img = Card1, Pax = "10-15 pax" }) => {
  const [scaleItem, setScaleItem] = useState(false);
  const handleMouseEnter = () => {
    setScaleItem(true);
  };
  const handleMouseLeave = () => {
    setScaleItem(false);
  };

  return (
    <Section2CardStyle className="w-[42.2rem] h-[38.5rem] bg-white  relative rounded-[1.8rem]">
      <div className=" group mb-[1.25rem] h-full p-[1rem] pb-[1.75rem] rounded-[1.8rem]">
        <div className="h-[21.125rem] w-full overflow-hidden rounded-[1rem]">
          <img
            src={img}
            alt=""
            className={`rounded-[1rem] h-full w-full object-cover ${
              scaleItem ? "scale-110" : ""
            } group-hover:scale-110 transition-all duration-500`}
          />
        </div>
        <div className="poppins_font mt-[1.25rem]">
          <h2 className="text-[#2E2E2E] leading-[1.5rem] text-[1.25rem] font-semibold mb-[0.75rem]">
            HA GIANG LOOP TOUR (3D3N)
          </h2>
          <ItemSubContent></ItemSubContent>
          <ItemSubContent
            Icon={<HumanIconSection2></HumanIconSection2>}
            Category="GroupSize:"
            className="mx-[2px]"
          >
            {Pax}
          </ItemSubContent>
          <ItemSubContent
            Category="Transport:"
            Icon={<BusIconSection2></BusIconSection2>}
          >
            Sleeper bus & Motorbike with Local easy rider
          </ItemSubContent>
        </div>
      </div>
      <div
        className="absolute bottom-[2rem] left-[1rem]"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="flex gap-x-[1.5rem]">
          <ButtonItem
            className="w-[9.4rem] h-[3.2rem]"
            BgBtn={<BgButton2></BgButton2>}
            BgBtnScale="scale-[0.9]"
          >
            BOOK NOW
          </ButtonItem>
          <ButtonItem
            className="w-[9.4rem] h-[3.2rem]"
            stt={"white"}
            BgBtn={<BgButton2></BgButton2>}
            BgBtnScale="scale-[0.9]"
          >
            VIEW TOUR
          </ButtonItem>
        </div>
      </div>
    </Section2CardStyle>
  );
};
// export function ItemSubContent({
//   Icon = <HomeIconSection2></HomeIconSection2>,
//   Category = "Pick up:",
//   children = "Hanoi, Airpot, Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city",
//   className,
// }) {
//   return (
//     <div
//       className={`flex gap-x-[0.3rem] items-center  text-[0.92rem] tracking-[0.00219rem] leading-[1.375rem]`}
//     >
//       <div className={`scale-110 ${className}`}>{Icon}</div>
//       <div className="text-[#B34B1E] font-semibold my-[0.25rem]">
//         {Category}
//       </div>
//       <div className="text-[#727272]">{children}</div>
//     </div>
//   );
// }
export default Section2Card;
