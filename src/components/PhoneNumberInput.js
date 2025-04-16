import { useTranslation } from "react-i18next";
import Button from "./Button";
import Image from "next/image"; // Added import for next/image
import Select from "./Select";
import { COUNTRY_DETAILS } from "./utils/mockData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCountryName } from "./utils/userCountryNameSlice";

const PhoneNumberInput = ({ formik }) => {

  const dispatch = useDispatch();

  const {t} = useTranslation();
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  
  const handleCountryChange = (e) => {
    const key = COUNTRY_DETAILS.find((item)=>item.countrySTDCode===e.target.value)
    setSelectedCountryCode(key.countryCode);
    console.log("key",key)
    //Adding Country Name to redux store
    dispatch(updateCountryName(key.countryName))
    
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center border-1 border-[#A2A2A2] rounded-md px-2 mb-3">
        <div className="flex items-center mr-2">
          
          <Image
            src={`https://flagsapi.com/${selectedCountryCode}/flat/64.png`}
            alt={`${selectedCountryCode} Flag`}
            width={24} 
            height={16}
            className="mr-1"
            style={{ flexShrink: 0 }}
          />
        <div className="border-l border-[#A2A2A2] h-6 ml-2"></div>
          <Select
            className="bg-white text-black border-none focus:outline-none"
            optionValue={COUNTRY_DETAILS.map(item => item.countrySTDCode)}
            onChange={handleCountryChange}
            
          />
          {/* <span className="text-black">+91</span> */}
        </div>

        <input
          type="text"
          name="phoneNumber"
          className="flex-1 outline-none text-black bg-transparent"
          style={{ minWidth: '0', width: '100%' }}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          maxLength={10}
        />
      </div>
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className="text-red-500 mb-3">{formik.errors.phoneNumber}</div>
      )}
      <div className="flex items-center mb-3">
        <input type="checkbox" id="terms" className="mr-2 bg-gray-200" required />
        <label htmlFor="terms" className="text-black">
          {/* I agree to the */}
          {t("termsText")}
           <span className="font-bold">
            {/* Terms and Privacy Policy */}
            {t("terms")}
            </span>
        </label>
      </div>
      <Button type="submit">
        {/* SEND OTP */}
        {t("sendOtp")}
        </Button>
    </form>
  );
};

export default PhoneNumberInput;
