import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Btn_left_icon,
  ClockIcon,
  HumanIconSection2,
  MotoIcon,
  RiderImg1,
  RiderImg2,
  RiderImg3,
  RiderImg4,
  StarIcon,
} from "../../../assets/img/home";
import { ButtonItem } from "../../Button";
import ItemSubContent from "../Section2/ItemSubContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const imgData = [
  {
    img: RiderImg1,
  },
  {
    img: RiderImg2,
  },
  {
    img: RiderImg3,
  },
  {
    img: RiderImg4,
  },
];
const Sectio5Tab1 = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
        },
      }
    );
  }, []);
  // w-[31.401rem] h-[22.774rem]
  return (
    <div className="flex items-start justify-between">
      <div
        ref={boxRef}
        className="poppins_font text-[#727272] w-full h-[25.7rem] flex flex-col justify-between"
      >
        <div>
          <h2 className="text-[1.625rem] leading-[2rem] font-semibold mb-[0.5rem]">
            H’MONG TEAM
          </h2>
          <p className="w-[28.0945rem] text-[0.9rem] ">
            Now, thanks to you who brought tourism to our area, we are provided
            with new opportunities to earn sustainable incomes, helping our
            families and our communities to prosper. With every trip experience,
            we are not just your Easyrider, but also your travel buddies. We are
            looking forward to meeting you!
          </p>
        </div>
        <div className="">
          <ItemSubContent
            Icon={<HumanIconSection2></HumanIconSection2>}
            Category="Group size:"
            className="ml-[0.1rem] mr-[0.2rem]"
          >
            15 members
          </ItemSubContent>
          <ItemSubContent Icon={<MotoIcon></MotoIcon>} Category="Transport:">
            Motorbike
          </ItemSubContent>
          <ItemSubContent
            Icon={<ClockIcon></ClockIcon>}
            Category="Trip completed:"
          >
            154 trips
          </ItemSubContent>
          <div className="flex gap-x-[1rem] mt-[2rem]">
            <ButtonItem className="h-[3rem] w-[9rem]">JOIN WITH US</ButtonItem>
            <ButtonItem
              stt="white"
              className="h-[3rem] w-[6rem]"
              BgBtnScale="scale-[0.75]"
            >
              CALL US
            </ButtonItem>
          </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <div className=" rounded-2xl overflow-hidden">
            <CarouselContent className="w-[54.6rem]">
              {imgData.map((item, index) => (
                <CarouselItem key={index} className="basis-[75%]">
                  <img
                    src={item.img}
                    alt=""
                    className=" w-[41.401rem] h-[25.774rem] object-cover rounded-2xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          {/* <CarouselPrevious className="relative" />
        <CarouselNext /> */}

          <CarouselPrevious
            color="#fff"
            className="top-1/2 left-2 -translate-y-1/2 bg-inherit hover:bg-inherit scale-95"
          />
          <CarouselNext
            color="#fff"
            className="top-1/2 right-2 -translate-y-1/2 bg-inherit hover:bg-inherit scale-95"
          ></CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default Sectio5Tab1;
