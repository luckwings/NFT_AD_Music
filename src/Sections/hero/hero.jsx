import React from "react";

import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

import "./styles.css";

const Hero = () => {
  return (
    <div className="w-[100%] md:px-[100px] lg:px-[150px] xl:px-[200px] px-[20px] pt-10 mb-20 gap-[20px]">
      <img src="./items/logo.png" alt=" " className="mb-[10px] md:mb-20" />
      <div className="flex justify-center">
        <img
          src="./items/hero/hero.png"
          alt=" "
          className="block md:hidden w-[100%]"
        />
      </div>
      <div className="flex items-center">
        <HeroText />
        <HeroVideo />
      </div>
      <div className="mt-10 ml-[40%]">
        <img className="w-[120px] md:w-[150px] lg:w-[200px]" name="big_fan" src="./items/hero/big_fan.png" alt=" " />
      </div>
    </div>
  );
};

export default Hero;
