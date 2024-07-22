import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { styled } from "styled-components";
import BannerComponent from "../home/Banner/BannerComponent";
import SectionComponent from "../home/Section/SectionComponent";
import Section1Component from "../home/Section1/Section1Component";
import Section2Component from "../home/Section2/Section2Component";
import Section3Component from "../home/Section3/Section3Component";
import Section4Component from "../home/Section4/Section4Component";
import Section5Component from "../home/Section5/Section5Component";
import Section6Component from "../home/Section6/Section6Component";
import { maskBg } from "../../assets/img/home";
import BannerHeader from "../home/Banner/BannerHeader";
import Section7Component from "../home/Section7/Section7Component";
import FooterComponent from "../home/Footer/FooterComponent";
const HomePageStyles = styled.div`
  .over_bg2Section {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      #fff 100%
    );
    height: 20%;
    width: 100%;
    position: absolute;
    /* top: 0; */
    bottom: 0;
  }
`;
const HomePage = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Cuộn xuống
      gsap.to(headerRef.current, { y: -200, duration: 0.5 });
    } else {
      // Cuộn lên
      gsap.to(headerRef.current, { y: 0, duration: 0.5 });
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Đảm bảo không nhận giá trị âm
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <HomePageStyles>
      <div
        ref={headerRef}
        className="fixed top-[1.5rem] z-50 left-1/2 -translate-x-1/2 shadow-2xl rounded-2xl"
      >
        <BannerHeader></BannerHeader>
      </div>
      <BannerComponent></BannerComponent>
      <div className="relative">
        <img src={maskBg} alt="" className="h-full w-full" />

        <div className="absolute top-0 w-full pt-[6.25rem]">
          <SectionComponent></SectionComponent>
          <Section1Component></Section1Component>
        </div>
        <div className="over_bg2Section"></div>
      </div>
      <Section2Component></Section2Component>
      <Section3Component></Section3Component>
      <Section4Component></Section4Component>
      <Section5Component></Section5Component>
      <Section6Component></Section6Component>
      <Section7Component></Section7Component>
      <FooterComponent></FooterComponent>
    </HomePageStyles>
  );
};

export default HomePage;
