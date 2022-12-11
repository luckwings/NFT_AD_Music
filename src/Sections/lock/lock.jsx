import React from "react";

import LockImage from "./components/lockImage";
import LockImport from "./components/lockImport";
import Mobile from "./components/mobile";
import SmallPipe from "./components/smallPipe";

import "./styles.css";

const Lock = () => {
  return (
    <div className="my-[80px]">
      <div className="max-w-[600px] w-[90%] m-auto relative">
        <LockImage />
        <LockImport />
        <SmallPipe />
        <Mobile />
      </div>
    </div>
  );
};

export default Lock;
