import React from "react";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TittleComponent from "../../TittleComponent";
import Sectio5Tab1 from "./Sectio5Tab1";
import Section5Tab234 from "./Section5Tab234";
import {
  Chinh,
  MrDracoVu,
  MrHoang,
  MrLanh,
  MrLocHoang,
  MrNghiep,
  MrNhan,
  MrQuanPham,
  MrQuy,
  MrThoai,
  MrTruong,
  MsLinette,
  MsLy,
  MsLyChuong,
  MsTea,
  MsViet,
  Sunny,
} from "../../../assets/img/home";
const navData = [
  {
    title: "rider team",
    value: "rider_team",
  },
  {
    title: "specialist",
    value: "specialist",
  },
  {
    title: "local host",
    value: "local_host",
  },
  {
    title: "tour leader",
    value: "tour_leader",
  },
];
const slideData2 = [
  {
    img: MsLinette,
    name: "Ms. Linette",
    tittle: "Customer Support",
    txtContent: "",
  },
  {
    img: MrTruong,
    name: "Mr. Truong",
    tittle: "Tour Operator",
    txtContent: "",
  },
  {
    img: MrLocHoang,
    name: "Mr. Loc Hoang",
    tittle: "Marketing",
    txtContent:
      "I want to bring Ha Giang Loop to the world, and bring the world to Ha Giang Loop. Create more job opportunities for more people.",
  },
  {
    img: MrDracoVu,
    name: "Mr. Draco Vu",
    tittle: "Travel consultant",
    txtContent:
      "We are always available whenever and wherever you need any guidance or question!",
  },
  {
    img: MsTea,
    name: "Ms. Tea",
    tittle: "Back office",
    txtContent:
      "Hey there, my wonderful friends! I'm Tea, and I'm here to assist you as a back office supporter at Vietnam Cheers Hostel. If you're planning a trip to Vietnam and have any questions or need any guidance, don't hesitate to reach out to me anytime. I'm here to make your Vietnam adventure as smooth and enjoyable as possible. So, feel free to text me with any queries you may have. Let's make your trip a memorable one!",
  },
  {
    img: Chinh,
    name: "Chinh",
    tittle: "Travel consultant",
    txtContent:
      "We are always available whenever and wherever you need any guidance or question!",
  },
  {
    img: Sunny,
    name: "Sunny",
    tittle: "Travel consultant",
    txtContent:
      "We are always available whenever and wherever you need any guidance or question!",
  },
];
const slideData3 = [
  {
    img: MrLanh,
    name: "Ms. Linette",
    tittle: "Host Du Gia Cheers Homestay",
    txtContent: "Local host at Cheers Du Gia Homestay",
  },
  {
    img: MsLyChuong,
    name: "Ms.LyChuong",
    tittle: "Cook",
    txtContent: "",
  },
  {
    img: MsLy,
    name: "Ms.Ly",
    tittle: "Cook",
    txtContent: "Work at Cheers Du Gia Homestay",
  },
  {
    img: MsViet,
    name: "Ms.Viet",
    tittle: "Cook",
    txtContent: "",
  },
];
const slideData4 = [
  {
    img: MrQuanPham,
    name: "Mr.QuanPham",
    tittle: "Local Guide",
    txtContent: "",
  },
  {
    img: MrQuy,
    name: "Mr.Quy",
    tittle: "Local Guide",
    txtContent: "",
  },
  {
    img: MrThoai,
    name: "Mr.Thoai",
    tittle: "Local Guide",
    txtContent: "",
  },
  {
    img: MrNghiep,
    name: "Mr.Nghiep",
    tittle: "Local Guide",
    txtContent: "",
  },
  {
    img: MrNhan,
    name: "Mr.Nhan",
    tittle: "Local Guide",
    txtContent: "",
  },
  {
    img: MrHoang,
    name: "Mr.Hoang",
    tittle: "Local Guide",
    txtContent: "",
  },
];
const Section5Content = () => {
  return (
    <Tabs defaultValue="rider_team" className="w-[77.4vw] mx-auto">
      <div className="w-[74.5vw] flex justify-between items-end">
        <TittleComponent
          txtHeader="CHEERS"
          className="text-left"
          textStyle2="text-[3.1rem]"
        >
          FAMILY
        </TittleComponent>
        <TabsList className="w-[30rem] flex items-center gap-x-[2.25rem]">
          {navData.map((item, index) => (
            <TabsTrigger
              value={item.value}
              key={index}
              className="poppins_font uppercase font-semibold text-[#B7B7B7] text-[0.875rem]
                data-[state=active]:border-b-[2px] data-[state=active]:border-b-[#B34B1E] 
                data-[state=active]:text-[#B34B1E] relative 
                  
                data-[state=active]:after:hidden
                after:absolute 
                after:bottom-[-2px] 
                after:right-0 
                after:w-0 
                after:h-[2px]
              after:hover:bg-[#B7B7B7]
                after:hover:w-full
                after:transition-all
                after:duration-500
                after:hover:left-0"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {navData.map((item, index) => (
        <TabsContent value={item.value} key={index} className="pt-[1.5rem]">
          {item.value === "rider_team" ? (
            <Sectio5Tab1></Sectio5Tab1>
          ) : item.value === "specialist" ? (
            <Section5Tab234 dataSlide={slideData2}></Section5Tab234>
          ) : item.value === "local_host" ? (
            <Section5Tab234 dataSlide={slideData3}></Section5Tab234>
          ) : (
            <Section5Tab234 dataSlide={slideData4}></Section5Tab234>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Section5Content;
