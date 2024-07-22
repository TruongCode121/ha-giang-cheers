import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Card2, NuiBg } from "../../../assets/img/home";
import Section2Card from "./Section2Card";

const Section2Styless = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  margin-top: -15rem;
  .over_bg {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      #fff 100%
    );
    height: 100%;
    width: 100%;
    /* background-size: 100%; */
    position: absolute;
    bottom: 0;
    top: 0;
    /* transform: translateY(100%); */
  }
`;

const Section2Component = () => {
  const sec2CardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      sec2CardRef.current,
      { scale: 0.3, y: 100, opacity: 0 },
      {
        scale: 1,
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: { trigger: sec2CardRef.current },
      }
    );
  }, []);
  return (
    <Section2Styless>
      <img src={NuiBg} alt="" className="w-full" />
      <div className="over_bg"></div>
      <div className=" heavitas_font absolute top-[2rem] left-[50%] translate-x-[-50%] z-10">
        <div className="text-center text-white mb-[1.5rem]">
          <div className="text-[1.125rem]">OUR</div>
          <div className="text-[3.1rem]">GREAT TRIPS</div>
        </div>
        <div ref={sec2CardRef} className="flex gap-x-[1.5rem]">
          <Section2Card></Section2Card>
          <Section2Card img={Card2}></Section2Card>
        </div>
      </div>
    </Section2Styless>
  );
};

export default Section2Component;
