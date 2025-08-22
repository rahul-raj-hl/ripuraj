import Image from "next/image";
import Link from "next/link";
import { Trans, useTranslation} from "react-i18next";
import { useSelector } from "react-redux";
import styles from "@/styles/Home.module.css";

const VideoSection = () => {
  const { t } = useTranslation();
  

  const selectedLanguage = useSelector((state) => state.language.lang);
  // console.log(selectedLanguage);


  return (
    <div className="bg-white flex flex-col justify-center items-center p-4 sm:p-8 pb-16 min-h-0 sm:min-h-screen">
      <h2
        className={`text-[26px] sm:text-[34px] lg:text-[42px] ${styles.customFont1} text-indigo-900 mb-3`}
      >
        {t("usetheCoupon")}
      </h2>
      <p
        className={`text-[20px] sm:w-[60%] text-gray-800 text-center mb-5 ${styles.objectiveMedium}`}
      >
        <Trans
          i18nKey="usetheCouponDetails"
          components={{ 1: <strong />, 2: <strong /> }}
        />
        {/* अब इनाम जितना हुआ आसान! देखिए ये वीडियो और जानिए कैसे आप{" "}
            <strong>Ripuraj Gold /</strong>
            <strong>Silver Scheme </strong>
             में भाग लेकर बन सकते हैं <strong>Lucky Winner</strong>! */}
      </p>
      <div className="relative flex justify-center items-center w-full max-w-[1166px] h-[200px] sm:h-[400px] bg-yellow-400 rounded-2xl">
      {selectedLanguage === "nepali" ? (
          <iframe
            className="h-full w-full rounded-2xl"
            src="https://www.youtube.com/embed/Yfsc8viEkhE?si=TavFCVyub4Nyv41q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            className="h-full w-full rounded-2xl"
            src="https://www.youtube.com/embed/BOKQClMzRM0?si=co7K8JkDkwclmPux"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
