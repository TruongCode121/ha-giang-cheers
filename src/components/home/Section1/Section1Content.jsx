import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BgTitle, MapVN2 } from "../../../assets/img/home";
import { ButtonItem } from "../../Button";
import TittleComponent from "../../TittleComponent";

const buttonData = [
  {
    title: "SUPPORT LOCAL - SUSTAINABLE TRAVEL",
  },

  {
    title: "FREE 100% CANCELLATION",
  },
  {
    title: "DAILY DEPARTURES",
  },
  {
    title: "NO HAPPY - FULL REFUND",
  },
];

const Section1Content = () => {
  const titleSec1Ref = useRef(null);
  const txtRef = useRef(null);
  const btnRef = useRef(null);
  const mapRef = useRef(null);
  const handleAnimationYelemen = (ref) => {
    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ref.current },
      }
    );
  };
  const handleAnimaXelement = (ref) => {
    gsap.fromTo(
      ref.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: { trigger: ref.current },
      }
    );
  };
  useEffect(() => {
    handleAnimationYelemen(titleSec1Ref);
    handleAnimationYelemen(txtRef);
    handleAnimationYelemen(btnRef);
    handleAnimaXelement(mapRef);
  }, []);
  return (
    <div className="w-[78vw] mx-auto">
      <div className="flex justify-center items-center ">
        <div className="w-[45.8rem] -ml-6">
          {/* <div className="heavitas_font text-[1.1rem] text-[#b34b1e] mb-[0.5rem]">
            START WITH
          </div>
          <div className="heavitas_font text-[3.2rem] text-[#b34b1e] w-[30rem] leading-[3.2rem] mb-[1.8rem]">
            HA GIANG CHEERS TOUR
          </div> */}
          <div className="w-[30rem]">
            <TittleComponent
              className="text-left"
              txtHeader="START WITH"
              textStyle1="text-[1rem] mb-[0.5rem]"
              textStyle2="text-[3.1rem] leading-[3.2rem] mb-[1.8rem]"
            >
              HA GIANG CHEERS TOUR
            </TittleComponent>
          </div>
          <div
            ref={titleSec1Ref}
            className="grid grid-cols-2 gap-x-[1.27rem] mb-[0.8rem] ml-2 "
          >
            {buttonData.map((item, index) => (
              <ItemTitle key={index}>{item.title}</ItemTitle>
            ))}
          </div>
          <div
            ref={txtRef}
            className="poppins_font leading-[1.275rem] text-[#5a5858] text-[0.925rem] mb-[1.87rem]"
          >
            <strong>The Ha giang Loop Cheers Tour</strong> with easy rider
            organized by <strong>Vietnam Cheers Hostel</strong> is a must in
            Vietnam for any traveller. It is considered a highlight of South
            East Asia.
            <br />
            <br />
            Explore <strong>Ma Pi Leng</strong>, one of The Big Four Passes in
            Vietnam, through thousands of conical limestone peaks as well as
            deep and meandering valleys. Party dinner with families, waterfall
            and local life at authentic <strong>Cheers Du Gia Homestay</strong>
            will be the unique experience as well. This is designed for
            adventure-seekers — those who want to experience the biggest
            challenge Vietnam has to offer in a safe environment with our
            experienced easy riders.
          </div>
          <div ref={btnRef} className="flex gap-x-[1rem]">
            <ButtonItem>BOOK NOW</ButtonItem>
            <ButtonItem stt="white">READ MORE</ButtonItem>
          </div>
        </div>
        <div ref={mapRef}>
          <img src={MapVN2} alt="" className="ml-[11rem] scale-x-110" />
        </div>
      </div>
    </div>
  );
};
export function ItemTitle({ children }) {
  return (
    <>
      <div className="relative w-[20.60419rem] h-[5.13175rem] mb-[2rem]">
        <BgTitle className="scale-y-110 scale-x-105"></BgTitle>
        <div className="absolute top-0 w-full h-[5rem] poppins_font text-[0.9rem] text-[#FFF0EA] font-bold ">
          <div className="flex justify-center items-center w-full h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
// export function ButtonItem({ stt, children }) {
//   return (
//     <>
//       <button
//         type="button"
//         className={`poppins_font text-[0.8125rem] leading-[1.25rem] cursor-pointer group font-bold w-[7.6875rem] h-[3rem] border-[1px] border-[#B34B1E] rounded-lg relative  ${
//           stt === "white"
//             ? " text-[#B34B1E] hover:text-white hover:bg-[#B34B1E]"
//             : "bg-[#B34B1E] text-white"
//         } `}
//       >
//         <BgButton
//           className={`absolute top-[50%] translate-y-[-50%] scale-[0.8] group-hover:opacity-100 opacity-0`}
//         ></BgButton>
//         <div className={`h-full leading-[3rem] relative text-center`}>
//           {children}
//         </div>
//       </button>
//     </>
//   );
// }
export default Section1Content;
