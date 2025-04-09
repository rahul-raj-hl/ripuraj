import Image from "next/image";
import React from "react";

const Footer1 = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src="/footer_1.jpg"
          layout="responsive"
          width={100}
          height={80}
          alt="footer-1"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <Image
            src="/10.png"
            layout="responsive"
            width={100}
            height={80}
            alt="footer-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
