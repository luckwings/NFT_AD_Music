import React from "react";

import Communicate_mobile from "./components/communicate_mobile";
import Communicate_list from "./components/communicate_list";

const Communicate = () => {
  return (
    <div className="relative">
      <div className="max-w-[1000px] w-[90%] m-auto justify-center items-center md:flex hidden gap-[20px]">
        <Communicate_mobile />
        <Communicate_list />
      </div>
      <div className="md:flex hidden absolute lg:bottom-[-50px] xl:bottom-[-100px] bottom-[-70px] right-[-100px] lg:right-[-200px] xl:right-[-250px] w-[500px] lg:w-[700px] xl:w-[900px]">
        <img src="./items/communicate/pip.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Communicate;
