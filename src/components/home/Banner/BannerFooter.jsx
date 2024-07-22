import React, { useEffect, useState } from "react";
import Arrow from "../../../assets/img/home/Banner/Arrow";
import HumanIcon from "../../../assets/img/home/Banner/HumanIcon";
import SendIcon from "../../../assets/img/home/Banner/SendIcon";
import Line from "../../../assets/img/home/Banner/Line.png";
import { styled } from "styled-components";
// const footerData = [
//   {
//     title: "TOUR",
//     iconLeft: <SendIcon></SendIcon>,
//     name: "HAGIANG LOOP TOUR (3D3N)",
//     iconRight: <Arrow></Arrow>,
//     line: Line,
//   },
//   {
//     title: "SELF - DRIVING",
//     iconLeft: <HumanIcon></HumanIcon>,
//     name: "pax",
//     line: Line,
//   },
//   {
//     title: "PRIVATE DRIVER",
//     iconLeft: <HumanIcon></HumanIcon>,
//     name: "pax",
//   },
// ];
const TextTitle = styled.div`
  color: #727272;
  font-size: 0.875rem;
  letter-spacing: 0.00875rem;
  margin-bottom: 0.63rem;
`;
const BannerFooter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  let sum = count1 * 189 + count2 * 239;
  return (
    <section className="absolute bottom-[2.813rem] left-[50%] translate-x-[-50%] xl:scale-100 md:scale-75 transition-all duration-500 w-[76.75rem] h-[7.938rem] bg-white mx-auto rounded-[0.75rem] py-[1.25rem] px-[1.875rem]">
      <div className="flex justify-between items-center h-full">
        <div className="poppins_font flex items-center h-full w-[61rem] justify-between">
          <div>
            <TextTitle>TOUR</TextTitle>
            <div className="flex items-center gap-x-[0.63rem]">
              <div className="scale-125">
                <SendIcon></SendIcon>
              </div>
              <div className="flex items-center w-[21rem] justify-between font-bold hover:bg-[#F1F5F9] p-[0.5rem] rounded cursor-pointer">
                HA GIANG LOOP TOUR (3D3N)
                <Arrow></Arrow>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center w-full justify-between"> */}
          <div className="mr-[2.5rem] ml-[2rem]">
            <img src={Line} alt="" />
          </div>
          <ItemLeft
            textTitle="EASY RIDER - BASIC BIKE"
            setCount={setCount1}
          ></ItemLeft>
          <div className="mx-[2.5rem]">
            <img src={Line} alt="" />
          </div>
          <ItemLeft
            textTitle="EASY RIDER - BIG BIKE"
            setCount={setCount2}
          ></ItemLeft>
        </div>
        <button
          type="button"
          className={`w-[8.125rem] h-full ${
            sum == 0 ? "bg-[#D9D9D9]" : "bg-[#B34B1E]"
          } rounded-[0.5rem] text-white px-[1.5rem] py-[0.75rem]`}
        >
          <div className="font-bold text-[1.625rem] leading-[2rem] mb-[0.25rem] -mt-1">
            {sum > 0 ? `$${sum}` : "$0"}
          </div>
          <div className="font-bold text-[0.825rem] flex-shrink-0 leading-[1.25rem]">
            BOOK NOW
          </div>
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};
export function CounterItem({ children, onclick = () => {}, countItem }) {
  return (
    <>
      <button
        type="button"
        onClick={countItem == 0 ? () => {} : onclick}
        className="w-[2.25rem] h-[2.25rem] pl-[1px] pt-[2px] active:scale-90 bg-white rounded-full flex justify-center items-center shadow text-2xl"
      >
        {children}
      </button>
    </>
  );
}
export function ItemLeft({ textTitle = "SELF - DRIVING ", setCount }) {
  const [countItem, setCountItem] = useState(0);
  // const [countItem2, setCountItem2] = useState(0);

  const handleIncrement = () => {
    setCountItem(countItem + 1);
  };
  const handleDecrement = () => {
    setCountItem(countItem - 1);
  };
  useEffect(() => {
    setCount(countItem);
  }, [countItem]);
  return (
    <div>
      <TextTitle>{textTitle}</TextTitle>
      <div className="flex items-center gap-x-[0.63rem]">
        <div className="scale-125">
          <HumanIcon></HumanIcon>
        </div>
        <div className="flex items-center gap-x-4 ">
          <div className="font-bold"> {countItem} pax</div>
          <div className="flex items-center gap-x-3">
            <CounterItem onclick={handleDecrement} countItem={countItem}>
              -
            </CounterItem>
            <CounterItem onclick={handleIncrement}>+</CounterItem>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerFooter;
