import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const LandingPage = () => {

  const {t, i18n} = useTranslation()

  const selectedLanguage = useSelector((state)=>state.language.lang)

  // console.log(selectedLanguage,"landing page")
  console.log(i18n)

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
            {t("landingMsg1")}
          </p>
          <p className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-2">
          {t("landingMsg2")} <span className="text-[#E9B72E]">{t("landingMsg3")}</span> {t("landingMsg4")}{" "}
            <span className="text-[#E9B72E]">{t("landingMsg5")}</span> {t("landingMsg6")}
          </p>
          <p className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-[#E9B72E]">
          {t("landingMsg7")}
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
