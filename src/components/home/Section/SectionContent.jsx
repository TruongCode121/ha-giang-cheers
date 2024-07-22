import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LeftDown,
  LeftUp,
  RightDown,
  RightUp,
  Video1,
} from "../../../assets/img/home";
gsap.registerPlugin(ScrollTrigger);

const SectionContent = () => {
  const refHeroLeft = useRef(null);
  const refHeroRight = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    gsap.to(refHeroLeft.current, {
      scrollTrigger: {
        trigger: refHeroLeft.current,
        start: "top center",
        end: "top 100px",
        scrub: 1,
      },
      x: -300,
    });
    gsap.to(refHeroRight.current, {
      scrollTrigger: {
        trigger: refHeroRight.current,
        start: "top center",
        end: "top 100px",
        scrub: 1,
      },
      x: 310,
      duration: 10,
    });
  }, []);
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top center",
        end: "top 100px",
        scrub: 2,
        // markers: true,
        // id: "scrub",
        once: true, // khi đi qua phần tử rồi quay lại hoạt ảnh sẽ được giữ nguyên
      },
    });
    tl.to(videoRef.current, {
      scaleX: 2,
      scaleY: 1.85,
    });
  }, []);
  return (
    <div>
      <div className="absolute top-0 left-0" ref={refHeroLeft}>
        <HeroBgItem imgSrc1={LeftUp} imgSrc2={LeftDown}></HeroBgItem>
      </div>
      <div className="absolute top-0 right-0" ref={refHeroRight}>
        <HeroBgItem imgSrc1={RightUp} imgSrc2={RightDown}></HeroBgItem>
      </div>
      <div className="absolute top-[-2rem] left-[50%] translate-x-[-50%] h-full rounded">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          src={Video1}
          className="w-full h-full "
          controls
        ></video>
      </div>
    </div>
  );
};
export const HeroBgItem = ({ imgSrc1, imgSrc2 }) => {
  return (
    <div>
      <div className="relative">
        <img src={imgSrc1} alt="" className="rounded-xl  opacity-40" />
        <div className="bg-inherit absolute top-0 w-full h-full rounded-xl "></div>
      </div>
      <div className="relative mt-[1.88rem]">
        <img src={imgSrc2} alt="" className="rounded-xl ml-auto opacity-40" />
        <div className="bg-inherit absolute top-0 w-full h-full rounded-xl "></div>
      </div>
    </div>
  );
};
export default SectionContent;
