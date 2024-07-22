import React from "react";
import { styled } from "styled-components";
import { RainIcon, SunIcon } from "../../../assets/img/home";
import TittleComponent from "../../TittleComponent";
import TabSlide from "./TabSlide";

const WeatherItemStyle = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-top: 0.75rem;
  .weather_icon {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    background-color: #f9f9f9;
    border-radius: 6.25rem;
    padding: 0.75rem;
    p {
      font-size: 0.9rem;
      color: #727272;
    }
  }
`;

const Section6Content = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2">
      <TittleComponent
        txtHeader="WEATHER FORECAST OF"
        textStyle2="text-[3.1rem]"
      >
        HA GIANG
      </TittleComponent>
      <TabSlide></TabSlide>
      <div className="poppins_font  flex flex-col justify-center items-center mt-[2.7rem]">
        <p className="text-[#2E2E2E] text-[0.875rem]">
          A lovely time to travel. Excellent wildlife sightseeing
        </p>
        <WeatherItemStyle>
          <div className="weather_icon">
            <SunIcon className="scale-110"></SunIcon>
            <p>20 - 25 degree</p>
          </div>
          <div className="weather_icon">
            <RainIcon className="scale-110"></RainIcon>
            <p>65 - 80 mm</p>
          </div>
        </WeatherItemStyle>
      </div>
    </div>
  );
};

export default Section6Content;
