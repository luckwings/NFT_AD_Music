import React from "react";

import MemberMark from "./components/memberMark";
import MemberText from "./components/memberText";

import "./styles.css";

const Member = () => {
  return (
    <div className="max-w-[1000px] w-[90%] m-auto relative">
      <div className="fanwrap md:items-center md:gap-[100px] ">
        <MemberMark />
        <MemberText />
      </div>
      <div className="absolute right-[-10px] bottom-[50px] hidden md:block">
        <img
          src="./items/member/small_fan.png"
          alt=""
          width="70px"
        />
      </div>
    </div>
  );
};

export default Member;
