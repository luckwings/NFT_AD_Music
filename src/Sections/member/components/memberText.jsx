import React from "react";

const MemberText = () => {
  return (
    <div className="w-[calc(100% - 200px)]">
      <p className="title leading-[1.3] md:text-[35px] text-[30px] font-black mb-[20px] mt-[30px] md:mt-0">Offer your fans monthly memberships.</p>
      <div className="flex">
        <div className="mr-5">
          <p className="title leading-[1.3] md:text-[25px] lg:text-[30px] text-[30px] font-black mb-[30px] 2xl:mb-[20px] md:mt-0'">All paid in ETH.</p>
          <p className="mb-[15px] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px]">
            Yes, that's right, all paid in ETH directly into your wallet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberText;
