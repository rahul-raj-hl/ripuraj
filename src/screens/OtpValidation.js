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

  const steps = [
    {
      key: "step1",
      text: (
        <>
          <strong>QR कोड</strong> को अपने मोबाइल से <strong>स्कैन करें</strong> और <strong>Link</strong> को क्लिक करें।
        </>
      ),
    },
    {
      key: "step2",
      text: (
        <>
          <strong>Link</strong> में खुलने वाले पेज में अपना नाम, पूरा पता, मोबाइल नंबर,
          <span >और स्क्रैच कार्ड में दिए गए कूपन कोड को एंटर करें।</span>
        </>
      ),
    },
    {
      key: "step3",
      text: <>शिकायत या सुझाव के कमेंट के साथ <strong>Submit </strong> बटन दबाएं।</>,
    },
    {
      key: "step4",
      text: <>अपने <strong>SMS</strong> और <strong>WhatsApp</strong> पर <strong>Welcome Note</strong> प्राप्त करें।</>,
    },
  ];

  if (isOtpVerified) {
    return <FormPage />;
  }

  return (
    <div
      className="flex flex-col min-h-screen items-stretch justify-center bg-img text-black px-5"
      style={{ backgroundImage: "url('/validationPageImg.jpg')" }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-[100%] lg:max-w-[90%] mx-auto">
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row flex-1 text-black min-h-[80px] gap-5 items-stretch relative">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-stretch justify-center p-8 border-b md:border-b-0 md:border-r border-[#D3D3D3] gap-3">
            {isOtpSent ? (
              <OtpSection otp={otp} setOtp={setOtp} verifyOtp={verifyOtp} />
            ) : (
              <>
                <h2 className="text-lg font-semibold font-serif text-left">
                  Enter Your Mobile Number
                </h2>
                <h1 className="font-medium">Phone Number</h1>
                <PhoneNumberInput formik={formik} />
              </>
            )}
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col items-stretch justify-center p-4 md:py-18 md:pb-12 md:pr-8 gap-4 font-medium">
            <h2 className="text-xl font-bold">कूपन को कैसे प्रयोग करें:</h2>
            {steps.map((step, index) => (
              <div key={step.key} className="flex flex-col">
                <div className="flex items-start">
                  <span className="font-bold w-15 flex-shrink-0">
                      Step {index +1}:
                  </span>
                <p className="text-base mb-4">{step.text}  </p>
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
