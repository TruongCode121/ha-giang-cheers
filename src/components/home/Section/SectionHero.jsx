import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TittleComponent from "../../TittleComponent";

gsap.registerPlugin(ScrollTrigger);
const SectionHero = () => {
  const boxRef = useRef(null);
  const welcomeRef = useRef(null);
  const hagiangRef = useRef(null);
  const vietNamRef = useRef(null);
  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "top",
        scrub: true,
        once: true,
      },
      y: 60,
    });
    gsap.to(welcomeRef.current, {
      scrollTrigger: {
        trigger: welcomeRef.current,
        start: "top center",
        end: "top 100px",
        scrub: true,
        once: true,
      },
      color: "#fff", // Chuyển sang màu trắng
    });
    gsap.to(hagiangRef.current, {
      scrollTrigger: {
        trigger: hagiangRef.current,
        start: "top center",
        end: "top 100px",
        scrub: true,
        once: true,
      },
      color: "#fff", // Chuyển sang màu trắng
    });
    gsap.to(vietNamRef.current, {
      scrollTrigger: {
        trigger: vietNamRef.current,
        start: "top center",
        end: "top 100px",
        scrub: 2,
        once: true,
      },
      color: "#fff", // Chuyển sang màu trắng
      fontSize: "3.5rem", // Thu nhỏ cỡ chữ
      // marginTop: "-0.1rem",
    });
  }, []);
  return (
    <section className="text-center relative" ref={boxRef}>
      {/* <div
        ref={welcomeRef}
        className="heavitas_font text-[1rem] text-[#b34b1e] font-bold"
      >
        WELCOME
      </div>
      <div
        ref={hagiangRef}
        className="heavitas_font text-[3.45rem] text-[#b34b1e] font-bold"
      >
        HA GIANG LOOP
      </div> */}
      <TittleComponent
        txtHeader="WELCOME"
        textStyle1="text-[1rem]"
        textStyle2="text-[3.45rem]"
        ref1={welcomeRef}
        ref2={hagiangRef}
      >
        HA GIANG LOOP
      </TittleComponent>
      <div
        ref={vietNamRef}
        className="tomatoes_font text-[9.65744rem] tracking-[0.07956rem] text-[#FFD772] mt-8"
      >
        Vietnam
      </div>
    </section>
  );
};

export default SectionHero;
