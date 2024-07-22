import React from "react";
import {
  bg_footer,
  EartIcon,
  EmailIcon,
  FooterSendIcon,
  HomeIconSection2,
  logo_footer,
  MotoIcon,
  PhoneIcon,
  Vector,
} from "../../../assets/img/home";

const infoData = [
  {
    title: "CONTACT US",

    data: [
      {
        icon: <PhoneIcon></PhoneIcon>,
        info1: "+84 98 3333 986 (Linnete )",
        info2: "+84 85 668 0000 (Kevin )",
      },
      { icon: <EmailIcon></EmailIcon>, info: "Cheershostel1@gmail.com" },
      {
        icon: <HomeIconSection2></HomeIconSection2>,
        info: "5 Au Trieu, Hoan Kiem, Ha Noi",
      },
      {
        icon: <EartIcon></EartIcon>,
        info: "Tour run by Cheers Vietnam Hostel & Tours",
      },
    ],
  },
  {
    title: "ALL TOUR",
    data: [
      { icon: <MotoIcon></MotoIcon>, info: "HA GIANG LOOP TOUR (4D4N)" },
      { icon: <MotoIcon></MotoIcon>, info: "HA GIANG LOOP TOUR (3D3N)" },
    ],
  },
  {
    title: "CHEERS TOURS",
    data: [
      {
        icon: <FooterSendIcon></FooterSendIcon>,
        info: "Ha Long Bay on Social Cruise",
      },
      {
        icon: <FooterSendIcon></FooterSendIcon>,
        info: "Sapa Trekking Tour",
      },
      {
        icon: <FooterSendIcon></FooterSendIcon>,
        info: "Customize Your Trip",
      },
    ],
  },
];
console.log(infoData);
const FooterContent = () => {
  const getData = (title) => {
    let newArr = [];
    infoData.map((item, index) =>
      item.title == title ? (newArr = [...newArr, item]) : ""
    );
    return newArr;
  };
  return (
    <div className="relative">
      <img src={Vector} alt="" className="w-full" />
      <img
        src={bg_footer}
        alt=""
        className="absolute bottom-0 left-0 w-full object-cover"
      />
      <div className="w-[77.4vw] absolute top-[10.25rem] poppins_font left-1/2 -translate-x-1/2">
        <div className="flex">
          <div className="w-[52%]">
            <img src={logo_footer} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-x-[3rem] w-full">
            <LayoutInfodata
              data={getData("CONTACT US")}
              styleItem="-mt-5"
            ></LayoutInfodata>
            <LayoutInfodata data={getData("ALL TOUR")}></LayoutInfodata>
            <LayoutInfodata data={getData("CHEERS TOURS")}></LayoutInfodata>
          </div>
        </div>
      </div>
    </div>
  );
};
export function LayoutInfodata({ data, styleItem = "" }) {
  return (
    <div className="max-w-[20rem]">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="text-[#2E2E2E] font-semibold">{item.title}</div>
            {item.data.map((inf, idx) => (
              <div key={idx} className="flex items-center mt-4 gap-x-2">
                <div className={`${idx == 0 ? styleItem : ""}`}>{inf.icon}</div>
                <div className="text-[#727272] text-[0.94rem]">
                  {inf.info}
                  <div className="leading-6">
                    <p>{inf.info1}</p>
                    <p>{inf.info2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
export default FooterContent;
