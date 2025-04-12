import React, { useState } from "react";
import Select from "./Select";
import { LANGUAGE, STATE_NAME } from "./utils/mockData";
import { useDispatch } from "react-redux";
import { changeLanguage } from "./utils/langSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("");

  console.log("i18n", i18n)

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // dispatch(changeLanguage(e.target.value.toLowerCase()));
    i18n.changeLanguage(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  return (
    <div className="flex justify-between left-0 right-0 items-center mx-[5%] absolute z-50 top-4">
      <div>
        <img className="w-40 h-auto" src="/ripuraj-logo.png" alt="logo" />
      </div>
      <div>
        <Select
          className={
            "bg-[#E9B72E] text-black text-base rounded-3xl w-32 px-7 font-medium"
          }
          optionValue={LANGUAGE}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
