import React from "react";

const AppText = () => {
  return (
    <div className="md:w-7/12">
      <div className=" text-[45px] leading-[60px] mb-[40px]">
        <p className="font-bold title">No Ads.</p>
        <p className="font-bold title">No Rugs.</p>
        <p className="hidden md:block font-bold title">You in control.</p>
        <div className="flex items-end mt-[30px] relative">
          <p className="bignumber text-[#0000ff]">80</p>
          <p className="creator_pro mb-[-30px] font-bold text-[#0000ff]">%</p>
        </div>
        <p className="creator_title text-[#0000ff] my-[20px] goes">
          Goes to creators
        </p>
        <div className="flex items-end mt-[-20px] relative">
          <p className="smallnumber text-4xl font-extrabold text-[#0000ff]">
            20
          </p>
          <p className="service_pro mb-[-20px] font-bold text-[#0000ff]">%</p>
        </div>
        <p className="service_title text-[#0000ff] goes">
          Goes for running the service
        </p>
        <p className="mb-5 text-[17px] font-light leading-[20px]">
          Unlike big tech, you deserve more than crumbs. We don't shove ads down
          users' throats, we don't sell their data, and the importantly it is
          all about you.
        </p>
      </div>
      <div className="app-wrap">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default AppText;
