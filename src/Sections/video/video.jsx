import React from "react";

import Rock from "./rock/rock";
import Dancing from "./dancing/dancing";
import Art from "./art/art";

const Video = () => {
  return (
    <div className="relative md:mt-[500px] w-full mb-20 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl-[400px]">
      <Rock />
      <Dancing />
      <Art />
      <div className="pb-[40px]">
        <div className="mb-[40px]">
          <p className="title text-center m-auto leading-[1.3] md:text-[35px] text-[30px] font-black md:max-w-[600px]">
            Built for creators by Creators.
          </p>
        </div>
        <div className="app-wrap m-auto">
          <img src="./items/apple.png" alt=" " className="h-[30px]" />
          <p className="app-content">Get the app</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
