import React from "react";

import AppText from "./components/appText";
import AppMobile from "./components/appMobile";
import './styles.css';

const GetApp = () => {
  return (
    <div className="max-w-[1000px] m-auto md:flex justify-center w-[90%] gap-[50px] relative">
      <AppText />
      <AppMobile />
      <div className="absolute right-[0] bottom-[0]">
        <img src="./items/app/X.png" alt=" " />
        <img src="./items/app/app_circle.png" alt=" " />
      </div>
    </div>
  );
};

export default GetApp;
