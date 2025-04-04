import { useRouter } from "next/router";
import Button from "./Button";
import FormPage from "./FormPage";

const OtpInput = ({ length, onChange }) => {
  const router = useRouter();
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow single character input
    if (value.length > 1) return;

    const inputs = e.target.parentNode.querySelectorAll("input");
    const otpArray = Array.from(inputs).map((input, i) =>
      i === index ? value : input.value
    );

    onChange(otpArray.join(""));

    // Handle focus movement
    if (value && index < length - 1) {
      inputs[index + 1].focus();
    } else if (
      !value &&
      e.nativeEvent.inputType === "deleteContentBackward" &&
      index > 0
    ) {
      inputs[index - 1].focus();
    }
  };

  const renderInputs = () => {
    return Array.from({ length }).map((_, index) => (
      <input
        key={index}
        type="text"
        maxLength="1"
        className="otp-input"
        style={{
          width: "40px",
          height: "40px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          margin: "0 5px",
        }}
        onFocus={(e) => (e.target.style.outline = "2px solid #007BFF")}
        onBlur={(e) => (e.target.style.outline = "none")}
        onChange={(e) => handleChange(e, index)}
      />
    ));
  };

  const handleClick = () => {
    router.push("./FormPage")
  }

  return <div className="otp-input-container">{renderInputs()}</div>;
};

const OtpSection = ({ otp, setOtp, verifyOtp }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
      <OtpInput length={6} onChange={setOtp} />
      <Button onClick={()=>router.push("./FormPage")} className="mt-3">
        Verify OTP
      </Button>
    </div>
  );
};

export default OtpSection;
