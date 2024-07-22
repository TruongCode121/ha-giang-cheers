import React from "react";
import { BgButton } from "../../assets/img/home";

const ButtonItem = ({
  children,
  className = "w-[7.6875rem] h-[3rem]",
  BgBtn = <BgButton></BgButton>,
  BgBtnScale = "scale-[0.8]",
  stt,
}) => {
  return (
    <>
      <div
        className={`poppins_font text-[0.8125rem] leading-[1.25rem] cursor-pointer group font-bold  ${className} border-[1px] border-[#B34B1E] rounded-lg relative  ${
          stt === "white"
            ? " text-[#B34B1E] hover:text-white hover:bg-[#B34B1E] transition-all duration-500"
            : "bg-[#B34B1E] text-white"
        } `}
      >
        <div
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${BgBtnScale} group-hover:opacity-100 opacity-0`}
        >
          {BgBtn}
        </div>

        <div className={`h-full leading-[3rem] relative text-center`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ButtonItem;
