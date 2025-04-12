import Image from "next/image";
import React from "react";
import Svg from "./Svg";

const Footer = () => {
 
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Image
          src="/footer_2.jpg"
          layout="fill" // Fill the entire container
          // objectFit="fit" // Maintain aspect ratio and cover the area
          alt="footer-2"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-[7%] py-7 text-white">
        {/* Logo & Socials */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <img className="w-35 h-auto " src="/ripuraj-logo.png" alt="logo" />
          </div>
          <div className="flex gap-3 items-center">
            <a href="https://www.facebook.com/RipurajRice">
              <Svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                width="25.634"
                height="25.634"
                viewBox="0 0 33.634 33.634"
              >
                <path
                  id="Path_37"
                  d="M19.317,2.5c-20.85.611-22.976,29.868-2.641,33.634,0,0,0-11.823,0-11.823H12.384V19.419h4.292V15.692c.12-6.824,5.6-7.075,10.169-6.252V13.6H24.713a2.444,2.444,0,0,0-2.755,2.642V19.42h4.688L25.9,24.31H21.958V36.134C42.3,32.364,40.162,3.108,19.317,2.5Z"
                  transform="translate(-2.5 -2.5)"
                  fill="#161644"
                />
              </Svg>
            </a>

            <a href="https://www.instagram.com/ripurajagro/">
              <Svg
                id="instagram_2_"
                xmlns="http://www.w3.org/2000/svg"
                width="25.634"
                height="25.634"
                viewBox="0 0 33.634 33.634"
              >
                <path
                  d="M216.912,213.956A2.956,2.956,0,1,1,213.956,211,2.956,2.956,0,0,1,216.912,213.956Z"
                  transform="translate(-197.139 -197.139)"
                  fill="#161644"
                />
                <path
                  d="M133.926,120h-9.985A3.946,3.946,0,0,0,120,123.941v9.985a3.946,3.946,0,0,0,3.941,3.941h9.985a3.946,3.946,0,0,0,3.941-3.941v-9.985A3.946,3.946,0,0,0,133.926,120Zm-4.992,13.861a4.927,4.927,0,1,1,4.927-4.927A4.932,4.932,0,0,1,128.934,133.861Zm5.649-9.591a.985.985,0,1,1,.985-.985A.985.985,0,0,1,134.583,124.27Z"
                  transform="translate(-112.117 -112.117)"
                  fill="#161644"
                />
                <path
                  d="M24.765,0H8.868A8.878,8.878,0,0,0,0,8.868v15.9a8.878,8.878,0,0,0,8.868,8.868h15.9a8.878,8.878,0,0,0,8.868-8.868V8.868A8.878,8.878,0,0,0,24.765,0Zm2.956,21.809a5.919,5.919,0,0,1-5.912,5.912H11.824a5.919,5.919,0,0,1-5.912-5.912V11.824a5.919,5.919,0,0,1,5.912-5.912h9.985a5.919,5.919,0,0,1,5.912,5.912Z"
                  fill="#161644"
                />
              </Svg>
            </a>

            <a href="https://www.youtube.com/@RipurajAgro">
              <Svg
                id="_211929_social_youtube_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="30.836"
                height="28.634"
                viewBox="0 0 44.836 33.634"
              >
                <path
                  d="M44.539,71.427c0-3.941-2.9-7.112-6.481-7.112C33.206,64.088,28.257,64,23.2,64H21.627c-5.045,0-10,.088-14.854.315C3.2,64.315.3,67.5.3,71.445.082,74.563-.014,77.681-.006,80.8q-.013,4.677.3,9.363c0,3.941,2.9,7.138,6.472,7.138,5.1.236,10.326.342,15.642.333q7.988.026,15.642-.333c3.582,0,6.481-3.2,6.481-7.138.21-3.127.307-6.245.3-9.371Q44.854,76.113,44.539,71.427ZM18.124,89.39V72.18l12.7,8.6Z"
                  transform="translate(0.006 -64)"
                  fill="#161644"
                />
              </Svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex font-medium justify-between border-t-[2px] text-black border-[#bebcbc] pt-4 text-[0.7rem]">
          <div className="text-[#262688]">
            <p>© 2025 Ripuraj Agro</p>
          </div>
          <div className="flex gap-5 text-[#262688]">
            <p>© TERMS OF USE</p>
            <p>PRIVACY NOTICE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
