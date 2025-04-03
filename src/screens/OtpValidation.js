import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpSection from "../components/OtpSection";
import PhoneNumberInput from "../components/PhoneNumberInput";
import Instructions from "../components/Instructions";
import { apiRequest } from "../utils/apiRequest";
import Form from "../components/Form"
import { useRouter } from "next/router";

const OTPValidation = () => {
  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

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
      const data = await apiRequest("/api/sendOtp", { phoneNumber });
      if (data.message === "OTP sent successfully") {
        setError("");
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
    if (otp !== "123456") { 
      setError("Please enter a valid OTP.");
      return;
    }
    try {
      const data = await apiRequest("/api/verifyOtp", {
        phoneNumber: formik.values.phoneNumber,
        otp,
      });
      if (data.success) {
        router.push("./Form.js") // Redirect 
      } else {
        setError(data.message || "Failed to verify OTP.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center bg-gray-100 text-black px-5 py-2">
      <div className="bg-white p-10 rounded-lg shadow-md flex-1 text-black" style={{ minHeight: "300px", margin: "auto" }}>
        {isOtpSent ? (
          <OtpSection otp={otp} setOtp={setOtp} verifyOtp={verifyOtp} />
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4 font-serif">Enter Your Mobile Number</h2>
            <PhoneNumberInput formik={formik} />
          </>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <Instructions />
    </div>
  );
};

export default OTPValidation;
