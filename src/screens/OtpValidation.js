import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OtpSection from "../components/OtpSection";
import PhoneNumberInput from "../components/PhoneNumberInput";
import { apiRequest } from "../utils/apiRequest";
import { useRouter } from "next/router";
import FormPage from "../components/FormPage";

const OTPValidation = () => {
  const router = useRouter();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);

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
      setError(
        data.message === "OTP sent successfully"
          ? ""
          : data.message || "Failed to send OTP."
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async () => {
    setIsOtpVerified(
      otp === "123456" ? true : setError("Please enter a valid OTP.")
    );
  };

  if (isOtpVerified) {
    return <FormPage />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-stretch justify-center bg-gray-100 text-black px-5">
      <div className="flex flex-col md:flex-row w-full md:w-[85%]">
        <div className="bg-white p-10 rounded-l-2xl shadow-md flex-1 text-black min-h-[434px] m-auto py-24">
          {isOtpSent ? (
            <OtpSection otp={otp} setOtp={setOtp} verifyOtp={verifyOtp} />
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-4 font-serif">
                Enter Your Mobile Number
              </h2>
              <PhoneNumberInput formik={formik} />
            </>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="p-5 bg-white rounded-r-2xl shadow-md flex-1 text-black min-h-[434px] m-auto py-24">
          <h2 className="text-lg font-semibold mb-4">कूपन को कैसे प्रयोग करें</h2>
          {[
            "QR कोड को अपने मोबाइल से स्कैन करें और Link को क्लिक करें।",
            "Link में खुलने वाले पेज में अपना नाम, पूरा पता, मोबाइल नंबर, और स्क्रैच कार्ड में दिए गए कूपन कोड को एंटर करें।",
            "शिकायत या सुझाव के कमेंट के साथ Submit बटन दबाएं।",
            "अपने SMS और वॉट्सऐप पर Welcome Note प्राप्त करें।",
          ].map((step, index) => (
            <div key={index}>
              <p>
                <strong>Step {index + 1}:</strong> {step}
              </p>
              <hr className="border-gray-300 my-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPValidation;
