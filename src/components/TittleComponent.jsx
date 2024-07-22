import React, { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";
const TittleComponent = ({
  txtHeader = "WELCOME",
  children = "HA GIANG LOOP",
  textStyle1 = "",
  textStyle2 = "",
  className = "text-center",
  ref1,
  ref2,
}) => {
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: subTitleRef.current,
        },
      }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
        },
      }
    );
  }, []);
  return (
    <div className={`${className}`}>
      <div
        ref={ref1 ? ref1 : subTitleRef}
        className={`heavitas_font ${textStyle1} text-[#b34b1e]`}
      >
        {txtHeader}
      </div>
      <div
        ref={ref2 ? ref2 : titleRef}
        className={`heavitas_font ${textStyle2} text-[#b34b1e] w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default TittleComponent;
