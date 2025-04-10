import { useTranslation } from "react-i18next";
import Button from "./Button";
import Image from "next/image"; // Added import for next/image

const PhoneNumberInput = ({ formik }) => {

  const {t} = useTranslation();

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center border-1 border-[#A2A2A2] rounded-md p-2 mb-3">
        <div className="flex items-center mr-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="India Flag"
            width={24} 
            height={16}
            className="mr-1"
          />
        <div className="border-l border-[#A2A2A2] h-6 mx-2"></div>
          <span className="text-black">+91</span>
        </div>


        <input
          type="text"
          name="phoneNumber"
          className="flex-1 outline-none text-black bg-transparent"
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
