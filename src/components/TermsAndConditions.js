import React from "react";
import styles from "@/styles/Home.module.css";
import { useTranslation } from 'react-i18next';



const TermsAndConditions = () => {
  const sections = [
    {
      title: "नियम एवं शर्तें:",
      items: [
        "स्क्रैच किया गया कूपन संभाल कर रखें।",
        "इनाम प्राप्त करते समय कूपन को कंपनी कर्मचारी को लौटादें।",
        "सभी विवाद मोतिहारी न्यायालय क्षेत्राधिकार के अधीन है।",
        "किसी भी विवाद के संबंध में <strong>RAPL</strong> द्वारा लिया गया निर्णय अंतिम होगा।",
      ],
    },
    {
      title: "Terms & Conditions:",
      items: [
        "Keep the <strong>scratched coupon</strong> safe.",
        "<strong>Return the coupon</strong> to the company staff while claiming the prize.",
        "All disputes will be under the jurisdiction of the Motihari court.",
        "In case of any dispute, the decision made by <strong>RAPL</strong> will be final.",
      ],
    },
  ];

  const renderSection = (section, index) => (
    <div key={index} className="relative md:px-5">
      <h3 className="text-[#161644] text-xl font-extrabold mb-3">{section.title}</h3>
      <ol className={`list-decimal pl-5 text-gray-600 space-y-2 ${styles.objectiveMedium}`}>
        {section.items.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ol>
    </div>
  );
  const {t, i18n} = useTranslation()


  return (
    <div
      className="bg-yellow-100 py-[4%] bg-cover bg-center"
      style={{ backgroundImage: "url('/termsConditionPageImg1.jpg')" }}
    >
      <h2 className={`text-center text-gray-800 text-2xl mt-6 md:text-3xl font-extrabold pb-[2%]`}>
      {t("termsHeading")}

      </h2>

      <div className="bg-white rounded-3xl shadow-md w-[92%] sm:w-[90%] md:w-[85%] mx-auto mb-12 relative">
        <div className="flex flex-col p-4 md:flex-row justify-between gap-3 md:gap-5">

        {/*left section */}
          <div className="flex-1 border-b py-5 md:border-b-0 md:border-r border-[#D3D3D3]">
            {sections.map((section, index) => index === 0 && renderSection(section, index))}
          </div>

        {/*right section */}
          <div className="flex-1 py-5">
            {sections.map((section, index) => index === 1 && renderSection(section, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
