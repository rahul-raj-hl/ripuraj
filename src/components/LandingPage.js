import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const LandingPage = () => {

  const {t, i18n} = useTranslation()

  const selectedLanguage = useSelector((state)=>state.language.lang)

  // console.log(selectedLanguage,"landing page")

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
      <div className="absolute right-0 top-[42%] md:top-[40%] lg:top-[41.5%] xl:top-[41.5%] w-4/5 md:w-4/7 lg:w-4/7 xl:w-[58.5%] text-center">
        <div className="text-white pl-[8%] md:pl-[1%] "style={{ fontFamily: 'Kohinoor', fontWeight: 'bold' }}>
          <p className="font-medium text-sm md:text-xl lg:text-2xl xl:text-[1.8rem] ">
            {t("landingMsg1")}
          </p>
          <p className="text-m font-bold md:text-[1.6rem] lg:text-4xl xl:text-[2.8rem] my-[0.1rem] lg:my-3 xl:my-3 ">
            {t("landingMsg2")}{" "}
            <span className="text-[#E9B72E]">{t("landingMsg3")}</span>{" "}
            {t("landingMsg4")}{" "}
            <span className="text-[#E9B72E]">{t("landingMsg5")}</span>{" "}
            {t("landingMsg6")}
          </p>
          <p className="text-xl font-bold md:text-3xl lg:text-5xl xl:text-6xl text-[#E9B72E]">
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
