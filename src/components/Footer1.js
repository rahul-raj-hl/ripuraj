import Image from "next/image";
import React from "react";

const Footer1 = () => {
  return (
    <div>
      {/* Desktop View with Background and 10.png */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="h-40%">
          <Image
            src="/footer_1.jpg"
            alt="footer background"
            layout="responsive"
            width={500}
            height={120}
            objectFit="cover"
            quality={100}
            className="z-0"
          />
        </div>

        {/* Centered Product Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-4/10 md:w-4/12 lg:w-4/12">
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

      {/* Mobile View with only 11.png (no background) */}
      {/* <div className=" md:hidden">
        <div className="w-100%">
          <Image
            src="/11.png"
            alt="footer product mobile"
            layout="responsive"
            width={500}
            height={400}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Footer1;
