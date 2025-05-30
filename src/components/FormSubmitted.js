import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCountryCode, updateCountryName } from "./utils/userCountryNameSlice";

const FormSubmitted = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const userCountryName = useSelector((state) => state.countryName.countryName);
  const selectedLanguage = useSelector((state) => state.language.lang);

  const handleCrossIcon = () => {
    dispatch(updateCountryCode("+91"))
    dispatch(updateCountryName(null))
    router.push("/");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Desktop BG */}
      <div className="absolute w-full h-full hidden md:block">
        <Image
          src="/landingImage.jpg"
          layout="fill"
          objectFit="fill"
          alt="Desktop version"
          className="blur-[0.06rem]"
        />
      </div>

      {/* Mobile BG */}
      <div className="absolute w-full h-full block md:hidden">
        <Image
          src="/landingImageForMobile.png"
          layout="fill"
          objectFit="fill"
          alt="Mobile version"
          className="blur-[0.06rem]"
        />
      </div>

      <div className="flex mt-[13%] md:mt-[9%] lg:mt-[4%] w-[95%] md:w-[60%] lg:w-[40%] mx-auto min-h-screen items-center relative z-10">
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
          {userCountryName === null && (
            <div>
              <h1
                className={`font-bold text-4xl md:text-5xl text-[#161644] ${styles.customFont}`}
                style={{ fontSize: "50px" }}
              >
                Thank You!
              </h1>
              <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
                For Your Participation
              </p>
              <p
                className={`text-[#161644] mt-4 font-[500] text-sm md:text-base ${styles.customFontPoppins}`}
              >
                {" "}
                A Lucky Draw will be held on the 5th of every month. The coupon
                codes of the winners will be published on the company
                <span>&apos;</span>s website -{" "}
                <Link
                  className="font-extrabold"
                  href={"https://ripurajagro.com/"}
                >
                  www.ripurajagro.com
                </Link>
                . The prizes will be sent to the winners at their provided
                address.
              </p>
            </div>
          )}
          {userCountryName === "Nepal" && selectedLanguage === "english" && (
            <div>
              <h1
                className={`font-bold text-4xl md:text-5xl text-[#161644] ${styles.customFont}`}
                style={{ fontSize: "50px" }}
              >
                Thank you
              </h1>
              <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
                For participating in the Ripuraj Gold/Silver contest!
              </p>
              <p
                className={`text-[#161644] mt-4 font-[500] text-sm md:text-base ${styles.customFontPoppins}`}
              >
                {" "}
                On the 5th of every month, you will receive an SMS/WhatsApp
                message with the winners names and complete details. Best of
                luck to all!
              </p>
            </div>
          )}
          {userCountryName === "Nepal" && selectedLanguage === "nepali" && (
            <div>
              <h1
                className={`font-bold text-4xl md:text-5xl text-[#161644] ${styles.customFont}`}
                style={{ fontSize: "50px" }}
              >
                धन्यवाद!
              </h1>
              <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
                Ripuraj Gold/Silver प्रतियोगितामा भाग लिनेका लागि तपाईंलाई
                हृदयदेखि धन्यवाद।
              </p>
              <p
                className={`text-[#161644] mt-4 font-[500] text-sm md:text-base ${styles.customFontPoppins}`}
              >
                {" "}
                प्रत्येक महिना ५ तारिखमा तपाईंलाई SMS/WhatsApp द्वारा एक सन्देश
                प्राप्त हुनेछ, जसमा विजेताहरूको नाम र उनीहरूको सम्पूर्ण विवरण
                हुनेछ। शुभकामना!
              </p>
            </div>
          )}
          {userCountryName === "Nepal" && selectedLanguage === "hindi" && (
            <div>
              <h1
                className={`font-bold text-4xl md:text-5xl text-[#161644] ${styles.customFont}`}
                style={{ fontSize: "50px" }}
              >
                Thank you
              </h1>
              <p className="font-bold text-[1rem] md:text-[1.1rem] mt-2 text-[#E9B72E]">
                For participating in the Ripuraj Gold/Silver contest!
              </p>
              <p
                className={`text-[#161644] mt-4 font-[500] text-sm md:text-base ${styles.customFontPoppins}`}
              >
                {" "}
                On the 5th of every month, you will receive an SMS/WhatsApp
                message with the winners names and complete details. Best of
                luck to all!
              </p>
            </div>
          )}
          <Link href={"https://ripurajagro.com/shop2/"}>
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
