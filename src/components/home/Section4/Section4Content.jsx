import React from "react";
import { StarIcon } from "../../../assets/img/home";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Btn_left_icon } from "../../../assets/img/home";
import { styled } from "styled-components";

const cardData = [
  {
    content:
      "Amazing experience. So inclusive and fun.Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.",
    title: "Niklas",
  },
  {
    content:
      "Super nice homestay, great and friendly people. Had the best time and met so many amazing people, made the best memories:)",
    title: "Danielle",
  },
  {
    content:
      "What an experience!! Amazing scenery and wonderful people who make sure you have a great time and most importantly keep you safe!",
    title: "Tanya",
  },
  {
    content:
      "Great trip with amazing views and experiences and funny tour guides and drivers 100% recommend this tour!! The home stays were super cozy and food was delicious",
    title: "Janna H",
  },
];
const Section4Style = styled.div`
  .card_shadow {
    border-radius: 1rem;
    /* background: var(--Background-Elevation-01, #f2f2f2); */
    box-shadow: 0px 0px 12px 0px rgba(235, 255, 209, 0.1),
      6px 6px 32px 0px rgba(0, 0, 0, 0.04);
  }
`;
const Section4Content = () => {
  return (
    <Section4Style className="flex justify-center mt-[2rem]">
      <Carousel
        opts={{
          align: "start",
        }}
        //   className=""
      >
        <CarouselContent className="w-[80.6rem]">
          {cardData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="card_shadow bg-[#f2f2f2] hover:bg-white border-none transition-all duration-500 cursor-grab">
                  <CardContent className="flex poppins_font flex-col w-[23.75rem] h-[14rem] aspect-square items-center justify-center p-6 text-center select-none">
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}

                    <p className=" text-[0.9rem] text-[#727272]">
                      {item.content}
                    </p>
                    <div className="mt-[1rem] mb-[0.5rem]">
                      <StarIcon> </StarIcon>
                    </div>
                    <p className="text-[#B34B1E] font-semibold">{item.title}</p>
                    {/* {cardData.map((item, index) => {
                      return <div>{item.content}</div>;
                    })} */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-[5rem] top-1/2 -translate-y-1/2 hover:bg-inherit" />
        <CarouselNext className="-right-[5rem] top-1/2 -translate-y-1/2 hover:bg-inherit" />
      </Carousel>
    </Section4Style>
  );
};

export default Section4Content;
