import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { useEffect } from "react";

const accordionData = {
  title: "NATURE",
  txtContent:
    "Nature is not only all that visible to the eyes, it also includes the inner picture of the soul.",
  questData: [
    {
      quest: "What is the Ha Giang loop?",
      reply:
        "The Ha Giang Loop is a motorcycle loop around Ha Giang, one of the northernmost provinces of Vietnam and 310 km from Hanoi. The loop begins and ends in Ha Giang city, about 5 hours North of Hanoi. The loop takes about 3-4 days to complete and offers breathtaking mountain and cliff views. You will find here many of the foremost stunning stretches of road in Southeast Asia, all of which are surrounded by towering mountains, lush rice fields, and flowing rivers. Visitors are also fascinated by the ethnic group tribe culture that's authentically visible as they travel by motorbikes.",
    },
    {
      quest: "Why should I visit the Ha Giang Loop?",
      reply:
        " The Ha Giang Loop in Vietnam is a must-visit destination for travelers seeking adventure and stunning landscapes. Ha Giang Loop ranks 25th in New York Times's list of 52 best places to travel in 2023. It is also considered as The Forgotten Wonder of the world. Ha Giang Loop still keeps its nature and wilderness because of lack of tourist development and has to offer remarkable natural beauty, epic mountain passes and unique tribe culture from various ethnic minority groups. So take your time, pack your bags and get ready for an unforgettable journey now before it is too late!",
    },
    {
      quest: "When is the best time to visit the loop?",
      reply:
        " Ha Giang is beautiful all year round, but the weather and natural scenery changes according to the season. Since Ha Giang is strongly divided in various types of topography and located in northern Vietnam, it has two distinct seasons - rainy and dry. However, the weather can vary depending on the month as well as altitude, since much of the Ha Giang Loop is along mountainous terrain. + From January to March (average temperature of 17°C and 18°C), spring comes with blooming flowers. + From April and May (average temperature of 24°C): Warmer weather, yet pleasant. + May: Hot with some rain and at the irrigation period. + From June to August: Peak heat and rain - good time for swimming at the waterfall. + From September to October: Harvest time with gorgeous golden rice fields. + November: Pleasant temperatures, lower rainfall with the typical buckwheat flowers. + December: Pleasantly dry and cool, painted in a yellow tone with rapeseeds.",
    },
    {
      quest: "The highlighted attractions",
      reply:
        "The Ha Giang Loop in Ha Giang province is a popular attraction that can be explored by motorbike or car. The loop includes notable places such as the Dong Van Geopark, known for its breathtaking landscapes and unique geological formations, the Lung Cu Flag Tower which offers panoramic views of the surrounding mountains, and the Hoang Su Phi Rice Terraces, famous for their beauty in harvest time. You can also visit ethnic minority villages to learn about their cultures and traditions, explore vibrant markets, and experience thrilling spots like the Tham Ma Slope and the Ma Pi Leng Pass. Another highlight is the Quan Ba Twin Mountains, offering a picturesque view along the loop and Nho Que River is known for its stunning scenery, as it winds its way through layers of jagged rocks, creating a beautiful landscape and also a popular spot for kayaking and offers opportunities for photography enthusiasts.",
    },
  ],
};
export function Section7Accordion({ data = accordionData, titleRef }) {
  return (
    <div className="poppins_font w-[28.125rem]">
      <div ref={titleRef}>
        <h2 className="title text-[1.625rem] font-semibold leading-[2rem]">
          {data.title}
        </h2>
        <p className="title text-[#727272] text-[0.93rem] mt-[0.75rem]">
          {data.txtContent}
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-6 select-none">
        {data.questData.length > 0
          ? data.questData.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-0"
                >
                  <AccordionTrigger
                    iconStyle="text-[#727272] -rotate-180"
                    strokeWidth={4}
                    className="data-[state=open]:text-[#B34B1E] font-semibold text-[#727272] data-[state=open]:border-b-[1px] data-[state=open]:border-b-[#B34B1E] [&[data-state=open]>svg]:-rotate-0"
                  >
                    {index + 1}. {item.quest}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#727272] pt-6 text-[0.93rem] leading-[1.5rem] tracking-[0.00219rem]">
                    {item.reply}
                  </AccordionContent>
                </AccordionItem>
              );
            })
          : "no data"}
      </Accordion>
    </div>
  );
}
