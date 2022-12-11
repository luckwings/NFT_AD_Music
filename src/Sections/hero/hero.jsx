import React from "react";

import HeroText from "./components/heroText";
import HeroVideo from "./components/heroVideo";

const Hero = () => {
  return (
    <div className="w-[100%] md:px-[100px] lg:px-[150px] xl:px-[200px] px-[20px] pt-10 mb-20 gap-[20px]">
      <img src="./items/logo.png" alt=" " className="mb-20" />
      <div className="flex justify-center">
        <img src="./items/hero/hero.png" alt=" " className="block md:hidden w-[100%]" />
      </div>
      <div className="flex items-center">
        <HeroText />
        <HeroVideo />
      </div>
      <img name="big_fan" src="./items/hero/big_fan.png" alt=" " className="mt-10 ml-[40%]" />
    </div>
  );
};

export default Hero;
