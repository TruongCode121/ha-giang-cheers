import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  APR,
  AUG,
  DEC,
  FEB,
  JAN,
  JUL,
  JUN,
  MAR,
  MAY,
  NOV,
  OCT,
  SEP,
} from "../../../assets/img/home";

const navTabData = [
  {
    name: "JAN",
    value: "JAN",
    img: JAN,
  },
  {
    name: "FEB",
    value: "FEB",
    img: FEB,
  },
  {
    name: "MAR",
    value: "MAR",
    img: MAR,
  },
  {
    name: "APR",
    value: "APR",
    img: APR,
  },
  {
    name: "MAY",
    value: "MAY",
    img: MAY,
  },
  {
    name: "JUN",
    value: "JUN",
    img: JUN,
  },
  {
    name: "JUL",
    value: "JUL",
    img: JUL,
  },
  {
    name: "AUG",
    value: "AUG",
    img: AUG,
  },
  {
    name: "SEP",
    value: "SEP",
    img: SEP,
  },
  {
    name: "OCT",
    value: "OCT",
    img: OCT,
  },
  {
    name: "NOV",
    value: "NOV",
    img: NOV,
  },
  {
    name: "DEC",
    value: "DEC",
    img: DEC,
  },
];
const TabSlide = () => {
  return (
    <Tabs defaultValue="JUL" className="select-none">
      {navTabData.map((item, index) => (
        <TabsContent value={item.value} key={index} className="pt-[0.9rem]">
          <img
            src={item.img}
            alt=""
            className="w-[74.625rem] h-[27.25rem] object-cover rounded-2xl"
          />
        </TabsContent>
      ))}
      <TabsList className=" flex items-center gap-x-[1.5rem] mt-[2.688rem]">
        {navTabData.map((item, index) => (
          <TabsTrigger
            value={item.value}
            key={index}
            className="poppins_font w-[4.625rem] h-[4.625rem] flex flex-shrink-0 rounded-full bg-[#F8F8F8] 
            uppercase font-semibold text-[#727272] text-[0.875rem]
            data-[state=active]:text-[#fff] data-[state=active]:bg-[#B34B1E] 
            hover:bg-[#B34B1E] hover:text-[#fff] transition-all duration-300
            relative"
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabSlide;
