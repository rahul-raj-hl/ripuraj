import { useTranslation } from "react-i18next";
import Button from "./Button";
import Image from "next/image"; // Added import for next/image
import Select from "./Select";
import { COUNTRY_DETAILS } from "./utils/mockData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCountryCode, updateCountryName } from "./utils/userCountryNameSlice";
import { updateMobileNumber } from "@/components/utils/userMobileSlice";
import { useRouter } from "next/router";

const PhoneNumberInput = ({ formik }) => {

  const router = useRouter();
  const dispatch = useDispatch();

  const {t} = useTranslation();
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  const [isChecked, setIsChecked] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[9876]\d{9}$/;
    console.log("hello", phoneNumber)
    //adding user phone number to redux store
    dispatch(updateMobileNumber(formik.values.phoneNumber))
    return regex.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formik.values.phoneNumber)) {
      formik.setFieldError("phoneNumber", t("invalidPhoneNumber"));
      return;
    }
    formik.handleSubmit();
  };

  const handleCountryChange = (e) => {
    const key = COUNTRY_DETAILS.find((item)=>item.countrySTDCode===e.target.value)
    setSelectedCountryCode(key.countryCode);
    //Adding Country Name to redux store
    dispatch(updateCountryName(key.countryName))
    dispatch(updateCountryCode(e.target.value))
    if(key.countryName==="Nepal"){
      router.push("/userform");
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
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
          className="flex-1 outline-none text-black bg-transparent h-12"
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
      <div className="flex items-start mb-8 mt-5">
        <div
          className={`w-5 h-5 flex items-center justify-center border rounded relative shrink-0 ${
            isChecked ? "bg-[#262688] border-[#262688]" : "bg-gray-200 border-gray-400"
          }`}
        >
          <input
            type="checkbox"
            id="terms"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
          {isChecked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path d="M20.285 6.707a1 1 0 0 0-1.414-1.414l-9.192 9.192-3.364-3.364a1 1 0 0 0-1.414 1.414l4.071 4.071a1 1 0 0 0 1.414 0l10-10z" />
            </svg>
          )}
        </div>
        <label
          htmlFor="terms"
          className="text-black ml-2 flex-1 leading-tight"
          style={{ lineHeight: "1.2" }}
        >
          {t("termsText")}
          <span className="font-bold">
            {t("terms")}
          </span>
        </label>
      </div>
      <Button type="submit">
        {t("sendOtp")}
        </Button>
    </form>
  );
};

export default PhoneNumberInput;
