import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ButtonItem } from "../../Button";
import TittleComponent from "../../TittleComponent";
import { Section7Accordion } from "./Section7Accordion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const accordionData2 = {
  title: "JOURNEY",
  txtContent:
    "Today is a beautiful day and Happiness isn’t a destination, it’s a journey we are on.",
  questData: [
    {
      num: 5,
      quest: "How do we get there?",
      reply:
        "To get to Ha Giang from other countries apart from Vietnam, you would need to first arrive in a major city like Hanoi. We have our head office at Vietnam Cheers Hostel in Hanoi and you can take a bus to Ha Giang from here, which is the most popular way to reach Ha Giang. We also provide transportation directly from Hanoi to Ha Giang. If you are in Sapa, it is recommended to go directly to Ha Giang instead of going back to Hanoi. Please contact us for a better transportation arrangement in advance.",
    },
    {
      num: 6,
      quest: "How hard about the loop?",
      reply:
        "The loop itself says most of the parts are mountain passes, especially with hundreds of twists and sharp turns in steep. Though the road now broadens to lessen the risk of accidents, there's some quite bumpy and unpaved. The most extremely rugged is from Mau Due - Du Gia - Quan Ba where you should put the same gear level (level 1 or 2) up and down slopes. Drive slowly and watch out for vehicles from opposite directions through curved mirrors on the next blind turns. So make sure to visit a number of stops on route to relax and cherish the beauty of the scenery. It's a really long way so there's no need to rush. If you're not sure about the road condition or not confident in your driving skills, consult your local guide before heading off the loop.",
    },
    {
      num: 7,
      quest: "What should I bring?",
      reply:
        "There are a few essential items you should bring along. Make sure you have a small backpack for 3 or 4 days. Since there will be waterfalls along the way, don't forget to bring a swimming suit to take a dip. Hiking shoes are also recommended for those who want to explore the mountains. As you will be in a rural area, it's important to bring some medicine, a first aid kit, and mosquito repellent. You may need a sim card for communication purposes. Bring your camera or GoPro to capture the beauty of nature, and don't forget to have some cash on hand, as ATMs may not be readily available.",
    },
    {
      num: 8,
      quest: "Drive my own or with an easy rider?",
      reply:
        "If you're planning to ride the Ha Giang Loop, you'll need to consider whether to drive on your own or hire an Easy Rider. While some experienced riders have successfully completed the loop, it is generally not recommended for inexperienced riders. The loop is known for its challenging road conditions and difficult terrain, making it potentially dangerous for beginners. Much of the Ha Giang Loop route may be a pass with jaw-dropping twists and turns and steep heights. Many of the roads are still extremely rugged - some even unpaved - with many obstacles to avoid due to an influx of tourism.Big lorries, buses, and other motorbikes zip along the roads - often with little or no regard for who they're sharing the road with - forcing drivers to be extremely attentive. Wandering eyes to the gorgeous scenery may make more fatal mistakes if one isn't careful. In fact, it may even be illegal to drive yourself if you don't have an international driving license. If you can hire an experienced local motorbike driver, you'll have your own personal local tour guide. A guide can take you to hidden spots and ensure a safer and more enjoyable experience. It's time just to sit at the back, giving no care about directions and soak up the atmosphere. Plus, since they're locals, they can give you loads of insight on daily life and culture in Ha Giang. If you're driving yourself, who will be there to answer all your burning questions?",
    },
  ],
};
const Section7Content = () => {
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef1.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        // scrollTrigger: { trigger: titleRef1.current },
      }
    ).fromTo(
      titleRef2.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        // scrollTrigger: { trigger: titleRef2.current },
      }
      // "+=0.5"
    );
  }, []);
  return (
    <div className="w-[77.4vw] mx-auto h-full">
      <div className="flex items-start justify-between w-full gap-x-[5rem]">
        <div className="w-full">
          <TittleComponent
            txtHeader="FAQ ABOUT"
            textStyle2="text-[3.1rem] mb-5"
            className="text-left"
          >
            THE LOOP
          </TittleComponent>
          <ButtonItem>BOOK NOW</ButtonItem>
        </div>
        <div className="-ml-3">
          <Section7Accordion titleRef={titleRef1}></Section7Accordion>
        </div>
        <div>
          <Section7Accordion
            titleRef={titleRef2}
            data={accordionData2}
          ></Section7Accordion>
        </div>
      </div>
    </div>
  );
};

export default Section7Content;
