import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ArrowItemNav } from "../../../assets/img/home";

// const navData = [
//   {
//     title: "home",
//   },
//   {
//     title: "about us",
//   },
//   {
//     title: "tour",
//     icon: <ArrowItemNav></ArrowItemNav>,
//   },
//   {
//     title: "destinations",
//   },
//   {
//     title: "blog",
//   },
//   {
//     title: "faq",
//   },
//   {
//     title: "contact",
//   },
//   {
//     title: "vietnam cheefs hostel",
//   },
// ];

const BannerNav = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [rowRef, setRowRef] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://intern-test.okhub-tech.com/wp-json/wp/v2/pages/65"
      );
      setData(response.data.acf.MenuTop);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleMouseEnter = () => {
    setRowRef(true);
  };
  const handleMouseLeave = () => {
    setRowRef(false);
  };
  return (
    <div className="heavitas_font text-black">
      <ul className="flex">
        {data.map((item, index) => {
          let itemVlue = "";
          Object.entries(item).map(([key, value]) =>
            value == "tour" ? (itemVlue = value) : ""
          );
          return (
            <li
              key={index}
              onMouseEnter={itemVlue == "tour" ? handleMouseEnter : () => {}}
              onMouseLeave={itemVlue == "tour" ? handleMouseLeave : () => {}}
              className="text-[0.925rem] font-normal tracking-[0.00219rem] group cursor-pointer relative px-[1.4rem]"
            >
              {Object.entries(item).map(([key, value]) => {
                return (
                  <span
                    key={key}
                    className=" items-center flex flex-shrink-0 gap-x-2 group-hover:text-[#EE6529] group-hover:-translate-y-2 transition-all duration-200"
                  >
                    {value}
                    {value == "tour" ? (
                      <ArrowItemNav rowRef={rowRef}></ArrowItemNav>
                    ) : (
                      ""
                    )}
                  </span>
                );
              })}

              <div
                className={`
                  absolute left-[50%] translate-x-[-50%] group-hover:opacity-100 opacity-0
                  group-hover:-translate-y-1 translate-y-2 transition-all duration-200 w-[0.6rem] h-[0.6rem] bg-[#EE6529] rounded-full flex flex-shrink-0`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BannerNav;
