import React from "react";

const MemberText = () => {
  return (
    <div className="md:w-7/12 lg:text-[65px] md:text-[40px] text-[30px] font-black md:-ml-[80px] lg:-ml-[120px] xl:-ml-[160px]">
      <p className="">Offer your fans monthly memberships.</p>
      <div className="flex mt-10">
        <div className="mr-5">
          <p className="mb-10">All paid in ETH.</p>
          <p className="text-[17px] font-thin">
            Yes, that's right, all paid in ETH directly into your wallet!
          </p>
        </div>
        <img
          src="./items/member/small_fan.png"
          alt=" "
          className="absolute md:right-[100px] lg:right-[150px] xl:right-[200px] md:block hidden"
        />
      </div>
    </div>
  );
};

export default MemberText;
