import React from "react";

import CommunicateMobile from "./components/communicateMobile";
import CommunicateList from "./components/communicateList";

const Communicate = () => {
  return (
    <div className="relative">
      <div className="max-w-[1000px] w-[90%] m-auto justify-center items-center md:flex hidden gap-[20px]">
        <CommunicateMobile />
        <CommunicateList />
      </div>
      <div className="absolute bottom-[700px] lg:bottom-[0px] xl:bottom-[-50px] 2xl:bottom-[-100px] md:bottom-[0px] right-[-300px] md:right-[-100px] lg:right-[-200px] xl:right-[-200px] 2xl:right-[-280px] w-[500px] md:w-[400px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px]">
        <img src="./items/communicate/pip.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Communicate;
