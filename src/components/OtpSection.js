import Button from "./Button";
import FormPage from "./FormPage";

const OtpInput = ({ onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) return;

    onChange(value);
  };

  return (
    <input
      type="text"
      maxLength="6"
      className="otp-input w-60 h-10 border border-gray-300 rounded-md mx-1 text-lg pl-4 tracking-[1.5em] focus:outline-blue-500"
      onFocus={(e) => (e.target.style.outline = "2px solid #007BFF")}
      onBlur={(e) => (e.target.style.outline = "none")}
      onChange={handleChange}
    />
  );
};

const OtpSection = ({ otp, setOtp, verifyOtp }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
      <OtpInput onChange={setOtp} />
      <Button onClick={verifyOtp} className="mt-3">
        Verify OTP
      </Button>
    </div>
  );
};

export default OtpSection;
