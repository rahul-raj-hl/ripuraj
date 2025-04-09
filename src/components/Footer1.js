import Image from "next/image";
import React from "react";

const Footer1 = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/footer_1.jpg" // background with coins
        alt="footer background"
        layout="responsive"
        width={500}
            height={400}
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Centered Product Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/9 md:w-4/8 lg:w-4/9 px-4">
          <Image
            src="/10.png" // product group image
            alt="footer product"
            layout="responsive"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
