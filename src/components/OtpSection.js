import Button from "./Button";

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
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
      <OtpInput onChange={setOtp} />
      <Button onClick={verifyOtp} className="mt-3">
        VERIFY OTP
      </Button>
    </div>
  );
};

export default OtpSection;
