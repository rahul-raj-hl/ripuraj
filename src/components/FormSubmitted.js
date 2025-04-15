import Image from "next/image";
import React, { useEffect, useState } from "react";

const FormSubmitted = () => {

  return (
    <div className="">
  {/* Desktop Image */}
  <div className="absolute w-full hidden md:block">
    <Image
      src="/landingImage.jpg"
      layout="responsive"
      width={100}
      height={80}
      alt="Desktop version"
      className=" blur-[0.06rem]"
    />
  </div>

  {/* Mobile Image */}
  <div className="absolute w-full block md:hidden ">
    <Image
      src="/landingImageForMobile.jpg"
      layout="responsive"
      width={100}
      height={80}
      alt="Mobile version"
      className=" blur-[0.06rem]"
    />
  </div>

  <div className="flex w-[90%] md:w-[50%] mx-auto">
    <div className="card card-body rounded-4xl bg-white my-[20%] md:my-[10%] shadow-2xl text-center">
      <img className="w-22 mx-auto" src="/gold_coin.png" alt="logo" />
      <div>
        <h1 className="font-bold text-4xl md:text-5xl text-[#161644]">Thank You!</h1>
        <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
          For Your Participation
        </p>
        <p className="text-[#161644] mt-4 font-medium text-sm md:text-base"> A Lucky Draw will be held on the 5th of every month. The coupon
              codes of the winners will be published on the company
              <span>&apos;</span>s website. The prizes will be sent to the
              winners at their provided address.</p>
      </div>
    </div>
  </div>
</div>

  );
};

{/* <p className="text-gray-500 mt-4 font-medium">
              A Lucky Draw will be held on the 5th of every month. The coupon
              codes of the winners will be published on the company
              <span>&apos;</span>s website. The prizes will be sent to the
              winners at their provided address.
            </p> */}

export default FormSubmitted;
