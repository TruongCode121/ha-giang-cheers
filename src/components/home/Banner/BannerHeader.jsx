import React from "react";
import { FacebookIcon, Logo, YoutubeIcon } from "../../../assets/img/home";

import BannerNav from "./BannerNav";

const BannerHeader = () => {
  return (
    <section
      // ref={headerRef}
      className="w-[93.5rem] h-[6.3rem] bg-white rounded-[1.125rem] mx-auto"
    >
      <div className="flex items-center h-full px-[2rem] justify-between">
        <div className="scale-105">
          <Logo></Logo>
        </div>
        <BannerNav></BannerNav>
        <div className="flex gap-x-[0.5rem]">
          <IconItemRight></IconItemRight>
          <IconItemRight>
            <YoutubeIcon></YoutubeIcon>
          </IconItemRight>
        </div>
      </div>
    </section>
  );
};
export function IconItemRight({ children = <FacebookIcon></FacebookIcon> }) {
  return (
    <div className="bg-[#B34B1E] w-[1.75rem] h-[1.75rem] rounded-full flex justify-center items-center">
      {children}
    </div>
  );
}
export default BannerHeader;
