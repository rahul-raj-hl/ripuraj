import Button from "./Button";

const PhoneNumberInput = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center border rounded-md p-2 mb-3">
        <div className="flex items-center mr-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="India Flag"
            className="w-6 h-4 mr-1"
          />
          <span className="text-black">+91</span>
        </div>
        <input
          type="text"
          name="phoneNumber"
          className="flex-1 outline-none text-black bg-transparent"
          placeholder="Phone Number"
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
          I agree to the <span className="font-bold">Terms and Privacy Policy</span>
        </label>
      </div>
      <Button type="submit">SEND OTP</Button>
    </form>
  );
};

export default PhoneNumberInput;
