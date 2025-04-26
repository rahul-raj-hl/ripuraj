import { useSelector } from "react-redux";
import Button from "./Button";
import styles from "@/styles/Home.module.css";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';

const OtpInput = ({ onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit to 6 digits
    if (!/^\d*$/.test(value) || value.length > 6) return;

    onChange(value);
  };

  return (
    <input
      type="text"
      maxLength="6"
      className="otp-input w-full h-10 border border-gray-300 rounded-md text-lg pl-8 tracking-[1.2em] focus:outline-blue-500"
      onFocus={(e) => (e.target.style.outline = "2px solid #007BFF")}
      onBlur={(e) => (e.target.style.outline = "none")}
      onChange={handleChange}
    />
  );
};

const OtpSection = ({ otp, setOtp, verifyOtp }) => {
  const userMobileNumber = useSelector((state) => state.mobile.mob);
  const userCountryName = useSelector((state) => state.countryName.countryName);

  const router = useRouter();

  const changeMobileNumber = () => {
    router.refresh();
  }

  return (
    <div>
      <h1 className={`font-semibold text-[18px] sm:text-[25px] text-start ${styles.customFont} font-sans text-[#161644] responsive-heading`}>
        OTP Verification
        </h1>
        <p className="mt-2">{userCountryName? "+977":"+91"} {userMobileNumber} Wrong Number? <span onClick={changeMobileNumber} className="underline cursor-pointer text-blue-600">Update now</span></p>
      <h2 className={`pt-4 mt-2 mb-2 mb-2${styles.objectiveMedium} text-[#161644] text-[18px] sm:text-[20px]`}>
        Security Code
        </h2>
      <OtpInput onChange={setOtp} />
      <Button onClick={verifyOtp} className="mt-3">
        VERIFY OTP
      </Button>
    </div>
  );
};

export default OtpSection;
