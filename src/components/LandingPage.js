import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className=" relative w-full">
      <Navbar />
      {/* Desktop Image */}
      <div className="hidden md:block">
        <Image
          src="/landingImage.jpg"
          layout="responsive"
          width={100}
          height={80}
          alt="Desktop version"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden">
        <Image
          src="/landingImageForMobile.jpg"
          layout="responsive"
          width={100}
          height={80}
          alt="Mobile version"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-4 md:px-10">
        <div className="text-center text-white bg-opacity-50 rounded p-4 mr-[5%] mt-[5%] max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[40%]">
          <p className="text-m  sm:text-lg md:text-xl lg:text-2xl mb-2">
            ख़रीदे रिपुराज सोनाशक्ति और
          </p>
          <p className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-2">
            जीतें <span className="text-[#E9B72E]">सोने</span> और{" "}
            <span className="text-[#E9B72E]">चांदी</span> के सिक्के
          </p>
          <p className="text-xl font-bold sm:text-3xl md:text-5xl lg:text-6xl text-[#E9B72E]">
            बिल्कुल मुफ्त
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

{
  /* <Image 
                src='/headerImage.png'
                layout="responsive"
                width={100}
                height={80}
                alt="Picture of the author"
                className={styles.responsiveImage} 
            /> */
}
