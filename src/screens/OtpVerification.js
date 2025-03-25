import { useState } from "react";
import OtpInput from "../components/OtpInput";

const OTPValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");

  // Validates a 10-digit phone number
  const isValidPhoneNumber = (number) =>
    typeof number === "string" && number.length === 10 && !isNaN(number);

  // Handles API requests with error handling
  const apiRequest = async (url, payload) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message || "Network error. Please try again.");
    }
  };

  // Sends OTP to the provided phone number
  const sendOtp = async () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      const data = await apiRequest("/api/sendOtp", { phoneNumber });
      if (data.message === "OTP sent successfully") {
        setIsOtpSent(true);
        setError(""); // Clear any previous errors
      } else {
        setError(data.message || "Failed to send OTP.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Verifies the entered OTP
  const verifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }
    try {
      const data = await apiRequest("verifyOtp", { phoneNumber, otp });//here api used to verify OTP
      if (data.success) {
        window.location.href = "/next-page"; // Redirect on successful verification
      } else {
        setError(data.message || "Failed to verify OTP.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Phone Number OTP Validation</h1>
      {isOtpSent ? (
        // OTP input section
        <div>
          <h2>Enter OTP</h2>
          <OtpInput length={6} onChange={setOtp} />
          <button
            onClick={verifyOtp}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Verify OTP
          </button>
        </div>
      ) : (
        // Phone number input section
        <div>
          <h2>Enter Phone Number</h2>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={sendOtp}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Send OTP
          </button>
        </div>
      )}
      {/* Display error message if any */}
      {error && (
        <p style={{ color: "red", marginTop: "1rem", fontSize: "0.9rem" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default OTPValidation;
