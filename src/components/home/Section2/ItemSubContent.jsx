import React from "react";
import { HomeIconSection2 } from "../../../assets/img/home";

const ItemSubContent = ({
  Icon = <HomeIconSection2></HomeIconSection2>,
  Category = "Pick up:",
  children = "Hanoi, Airpot, Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city",
  className,
}) => {
  return (
    <div
      className={`flex gap-x-[0.3rem] items-center  text-[0.92rem] tracking-[0.00219rem] leading-[1.375rem]`}
    >
      <div className={`scale-110 ${className}`}>{Icon}</div>
      <div className="text-[#B34B1E] font-semibold my-[0.25rem]">
        {Category}
      </div>
      <div className="text-[#727272]">{children}</div>
    </div>
  );
};

export default ItemSubContent;
