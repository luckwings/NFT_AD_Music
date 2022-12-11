import React from "react";

import AppText from "./components/appText";
import AppMobile from "./components/appMobile";
import './styles.css';

const GetApp = () => {
  return (
    <div className="max-w-[1000px] m-auto md:flex justify-center items-center w-[90%] gap-[50px] relative">
      <AppText />
      <AppMobile />
      <div className="absolute md:block hidden right-[-30px] bottom-[160px] lg:bottom-[120px] xl:bottom-[110px]">
        <img src="./items/app/X.png" alt=" " className="ml-[60px] mb-[50px] max-w-[70px]" />
        <img src="./items/app/app_circle.png" alt=" " className="max-w-[120px]" />
      </div>
    </div>
  );
};

export default GetApp;
