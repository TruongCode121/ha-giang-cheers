import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BannerHero = () => {
  const titref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      titref.current,
      { scale: 0, opacity: 0, y: 100, x: -100 },
      { scale: 1, duration: 1, opacity: 1, y: 0, x: 0 }
    );
  }, []);
  return (
    <section className="absolute top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
      <div ref={titref} className="relative w-[47.75rem] h-[9.5625rem]">
        <div className="heavitas_font text-white text-[4rem] absolute">
          BACKPACK UP
        </div>
        <div className="tomatoes_font text-white text-[8rem] absolute left-[17.87rem] top-[2rem]">
          and go
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
