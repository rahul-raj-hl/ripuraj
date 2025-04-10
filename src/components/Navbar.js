import React from "react";
import Select from "./Select";
import { LANGUAGE } from "./utils/mockData";

const Navbar = () => {
  return (
    <div className="flex justify-between left-0 right-0 items-center mx-[5%] absolute">
      <div>
        <img className="w-40 h-auto" src="/ripuraj-logo.png" alt="logo" />
      </div>
      <div>
        <Select
          className={
            "bg-[#E9B72E] text-black text-base rounded-3xl w-30 px-7 font-medium"
          }
          optionValue={LANGUAGE}
          placeholder="language"
          value="English"
        />
      </div>
    </div>
  );
};

export default Navbar;
