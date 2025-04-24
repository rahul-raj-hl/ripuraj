import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpSection from "../components/OtpSection";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { apiRequest } from "../utils/apiRequest";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateMobileNumber } from "@/components/utils/userMobileSlice";
import styles from "@/styles/Home.module.css";

const OTPValidation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const {t, i18n} = useTranslation();

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: async (values) => handleSendOtp(values.phoneNumber),
  });

  const handleSendOtp = async (phoneNumber) => {
    setIsOtpSent(true);
    try {
      const data = await apiRequest("/api/generateOtp", { phone: phoneNumber });
      if(data.success){
        setIsOtpSent(true);
      }
      else{
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
  
    try {
      const data = await apiRequest("/api/validateOtp", { phone: formik.values.phoneNumber, otp: otp });
      if(data.success){
        setIsOtpVerified(true);
      }
      else{
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
    //adding user phone number to redux store
    dispatch(updateMobileNumber(formik.values.phoneNumber))
  };

  const steps = [
    {
      key: "step1",
      text: (
        <Trans i18nKey="step1" components={{ 0: <strong />, 1: <strong />,2: <strong /> }} />
      ),
    },
    {
      key: "step2",
      text: (
        <Trans i18nKey="step2" components={{ 0:<strong />,1: <span /> }} />
      ),
    },
    {
      key: "step3",
      text: <Trans i18nKey="step3" components={{ 0: <strong /> }} />,
    },
    {
      key: "step4",
      text: <Trans i18nKey="step4" components={{ 0: <strong />, 1: <strong />, 2: <strong /> }} />,
    },
  ];

  if (isOtpVerified) {
    router.push("/userform");
  }

  return (
    <div
      className="flex flex-col min-h-screen items-stretch justify-center bg-img text-black px-[5%] bg-cover bg-no-repeat bg-center pt-16 sm:pt-20 pb-16 sm:pb-20"
      style={{
        backgroundImage: "url('/validationPageImg.jpg')",
      }}
    >
      <div
        className={`flex flex-col md:flex-row w-full max-w-[100%] lg:max-w-[96%] mx-auto ${
          typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent) ? "mt-2 mb-2" : ""
        }`}
      >
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row flex-1 text-black min-h-[67vh] gap-5 items-stretch relative">
          {/* Left Content */}
          <div
            className={`flex-1 flex flex-col items-stretch justify-center border-b md:border-b-0 md:border-r border-[#D3D3D3] responsive-padding ${
              typeof navigator !== "undefined" && !/Android/i.test(navigator.userAgent) ? "p-6" : ""
            } lg:p-12`} // Add padding for large screens using Tailwind's lg: prefix
          >
            {isOtpSent ? (
              <OtpSection otp={otp} setOtp={setOtp} verifyOtp={verifyOtp} />
            ) : (
              <>
                <h2
                  className={`font-semibold text-[19px] lg:text-[25px] text-start ${styles.customFont} font-sans text-[#161644] responsive-heading`}
                >
                  {/* Enter Your Mobile Number */}
                  {t("enterMobileNumber")}
                </h2>
                <h1 className={`pt-4 mt-2 mb-2 mb-2${styles.objectiveMedium} text-[#161644] text-[18px] sm:text-[20px]`}>
                  {/* Phone Number */}
                  {t("phoneNumber")}
                  </h1>
                <PhoneNumberInput formik={formik} />
              </>
            )}
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col items-stretch justify-center p-[3%] md:py-[3%] md:pb-[3%] md:pr-[2%] gap-3 font-medium lg:pr-12">
            <h2 className={`text-xl font-bold text-[25px] ${styles.customFont1}  text-[#161644] pb-2`}>
              {/* कूपन को कैसे प्रयोग करें: */}
              {t("howToUseCoupon")}
              </h2>
            {steps.map((step, index) => (
              <div key={step.key} className={`flex flex-col ${styles.objectiveMedium} text-[#454545] `}>
                <div className="flex items-start text-lg">
                  <span className="font-bold w-15 flex-shrink-0">
                      Step {index +1}:
                  </span>
                <p className={`text- mb-4 `}>{step.text}  </p>
                </div>
                {index < steps.length && <hr className="border-gray-300" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OTPValidation;
