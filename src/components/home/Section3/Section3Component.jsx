import React, { useEffect, useRef } from "react";
import {
  BorderSVG,
  CheefDuGia,
  Experience,
  Food,
  MutipleHuman,
} from "../../../assets/img/home";
import TittleComponent from "../../TittleComponent";
import gsap from "gsap";
const cardData = [
  {
    title: "Experience",
    bgImg: Experience,
  },
  {
    title: "Stay In Style",
    bgImg: CheefDuGia,
  },
  {
    title: "Food",
    bgImg: Food,
  },
  {
    title: "People",
    bgImg: MutipleHuman,
  },
];

const Section3Component = () => {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.3, y: 100, x: -50, opacity: 0 },
      {
        scale: 1,
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: cardRef.current },
      }
    );
  }, []);
  return (
    <div className="w-full h-[70vh] mt-[5rem]">
      <div className="w-[78vw] mx-auto">
        {/* <h3 className="text-[1rem]">DISCOVER</h3>
        <h1 className="text-[3.1rem] leading-[3.6rem] mb-[2.5rem]">
          THE GALLERY
        </h1> */}
        <TittleComponent
          txtHeader="DISCOVER"
          className="text-left"
          textStyle1="mb-[0.5rem]"
          textStyle2="text-[3.1rem] leading-[3.6rem] mb-[2.3rem]"
        >
          THE GALLERY
        </TittleComponent>
        <div ref={cardRef} className="grid grid-cols-4 gap-x-[1.5rem]">
          {cardData.map((item, index) => {
            return (
              <CardItem key={index} img={item.bgImg}>
                {item.title}
              </CardItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export function CardItem({ img = CheefDuGia, chilren = "Experience" }) {
  return (
    <div className="h-[30rem] w-full rounded-[1rem] relative select-none group overflow-hidden cursor-pointer">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover rounded-[1rem] group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-0 opacity-100 transition-all duration-500">
        <BorderSVG></BorderSVG>
      </div>
      <div className="absolute h-[10rem] w-[10rem] group-hover:h-[11rem] group-hover:w-[11rem] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:opacity-100 opacity-0 transition-all duration-500 bg-[#bad652]/70 backdrop-blur-sm"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] poppins_font font-semibold leading-[1.5rem] text-white text-[1.25rem]">
        {chilren}
      </div>
    </div>
  );
}
export default Section3Component;
