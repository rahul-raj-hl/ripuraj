import Image from "next/image";
import React from "react";

const Footer1 = () => {
  return (
    <div>
      {/* Responsive Footer Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden sm:block">
          <Image
            src="/footer_1.jpg"
            alt="footer background desktop"
            layout="responsive"
            width={500}
            height={120}
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>

        {/* Background Image - Mobile */}
        <div className="block sm:hidden">
          <Image
            src="/footer_1_mobile.png"
            alt="footer background mobile"
            layout="responsive"
            width={500}
            height={120}
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>

        {/* Centered Product Image (Same for all screens) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[74%] md:w-4/12 lg:w-4/12">
            <Image
              src="/10.png"
              alt="footer product"
              layout="responsive"
              width={500}
              height={400}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
