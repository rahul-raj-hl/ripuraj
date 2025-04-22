import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Link from "next/link";

const FormSubmitted = () => {
  const router = useRouter();

  const handleCrossIcon = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Desktop BG */}
      <div className="absolute w-full h-full hidden md:block">
        <Image
          src="/landingImage.jpg"
          layout="fill"
          objectFit="cover"
          alt="Desktop version"
          className="blur-[0.06rem]"
        />
      </div>

      {/* Mobile BG */}
      <div className="absolute w-full h-full block md:hidden">
        <Image
          src="/landingImageForMobile.jpg"
          layout="fill"
          objectFit="cover"
          alt="Mobile version"
          className="blur-[0.06rem]"
        />
      </div>

      <div className="flex mt-[13%] md:mt-[5%] lg:mt-[5%] w-[95%] md:w-[60%] lg:w-[40%] mx-auto min-h-screen items-center relative z-10">
        <div className="card card-body rounded-4xl bg-white shadow-2xl text-center w-full">
          {/* Card content */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black cursor-pointer font-bold absolute mr-[4%] top-0 mt-[4%] right-0"
            onClick={handleCrossIcon}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <img className="w-[17%] mx-auto" src="/gold_coin.png" alt="logo" />
          <div>
            <h1 className="font-bold text-4xl md:text-5xl text-[#161644]">
              Thank You!
            </h1>
            <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
              For Your Participation
            </p>
            <p className="text-[#161644] mt-4 font-[500] text-sm md:text-base">
              {" "}
              A Lucky Draw will be held on the 5th of every month. The coupon
              codes of the winners will be published on the company
              <span>&apos;</span>s website - <Link className="font-bold" href={"https://ripurajagro.com/"}>www.ripurajagro.com</Link>. The prizes will be sent to the
              winners at their provided address.
            </p>
          </div>
          <Link href={"https://ripurajagro.com/all-products/"}>
            <Button
              className="w-[65%] md:w-[40%] lg:w-[45%] cursor-pointer my-2 mx-auto rounded-[0.5rem] bg-[#E9B72E] hover:bg-yellow-500 text-black font-bold py-2 px-4"
              type="button"
            >
              VIEW MORE PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </div>

  );
};

{
  /* <p className="text-gray-500 mt-4 font-medium">
              A Lucky Draw will be held on the 5th of every month. The coupon
              codes of the winners will be published on the company
              <span>&apos;</span>s website. The prizes will be sent to the
              winners at their provided address.
            </p> */
}

export default FormSubmitted;
