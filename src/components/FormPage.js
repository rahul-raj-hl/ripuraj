import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input } from "./Input";
import Label from "./Label";
import Button from "./Button";
import Image from "next/image";
import validate from "./utils/validate";
import { createUser } from "./utils/store";
import { useSelector } from "react-redux";
import Select from "./Select";
import { COUNTRY_DETAILS } from "./utils/mockData";

const campaignId = "gold-scheme";

const FormPage = () => {
  const userMobileNumber = useSelector((state) => state.mobile.mob);
  const userCountryName = useSelector((state) => state.countryName.countryName);
  const countryCode = useSelector((state) => state.countryName.countryCode);

  const router = useRouter();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: userMobileNumber,
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: userCountryName ? userCountryName : "India",
    countryCode: countryCode,
    couponCode: "",
  };

  const initialStateErrorMessage = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    couponCode: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErrorMessage);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (keyName, value) => {
    setForm((prevForm) => ({ ...prevForm, [keyName]: value }));
  };

  const clearErrorMessage = () => {
    setErrors(initialStateErrorMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    clearErrorMessage();

    const errorMsgObj = validate(form);
    if (errorMsgObj.isValid) {
      const userDetail = {
        userDetails: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
        },
        campaignId: campaignId,
        couponCode: form.couponCode,
        address: {
          line1: form.address1,
          line2: form.address2,
          city: form.city,
          state: form.state,
          pincode: form.postalCode,
          country: form.country,
          countryCode: form.countryCode,
        },
      };

      const [, error] = await createUser(userDetail);
      setLoading(false);

      if (error) {
        alert(error);
      } else {
        router.push("/formsubmitted");
      }
    } else {
      setLoading(false);
      setErrors(errorMsgObj.errorMsg);
    }
  };

  const selectedCountry = COUNTRY_DETAILS.find(
    (item) => item.countryName === form.country
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/MainForm_bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="hidden md:block absolute inset-0 z-0 opacity-90"
        priority
      />

      <Image
        src="/MainForm_bg_mobile.jpg"
        alt="Mobile Background"
        layout="fill"
        objectFit="cover"
        className="block md:hidden absolute inset-0 z-0 opacity-90"
        priority
      />

      <div className="card card-body mx-4 my-6 md:mx-32 md:my-10 shadow-2xl bg-white text-black z-10 max-w-xl w-full">
        <h2 className="text-2xl font-bold my-2">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label label="Name" />
            <Input
              placeholder="Full Name"
              type="text"
              value={form.firstName}
              error={errors.firstName}
              required
              onChange={(e) => handleFormChange("firstName", e.target.value)}
            />
          </div>

          <div>
            <Label label="Address" />
            <Input
              placeholder="Enter address"
              type="text"
              value={form.address1}
              required
              onChange={(e) => handleFormChange("address1", e.target.value)}
            />
          </div>

          <div className="my-2">
            <Input
              placeholder="City"
              type="text"
              value={form.city}
              required
              onChange={(e) => handleFormChange("city", e.target.value)}
            />
          </div>
          <div className="my-2">
            <Select
              optionValue={selectedCountry.stateName}
              className="bg-white border-1 border-black w-full"
              onChange={(e) => handleFormChange("state", e.target.value)}
              initialSelectedValue="Select State"
              required={true}
              error={errors.state}
            />
          </div>

          <div className="my-2 gap-5">
            <div>
              <Label label="Phone *" />
              <Input
                className={
                  userCountryName === "Nepal"
                    ? "input w-full bg-white border-[#707070] border-1 font-medium"
                    : "bg-gray-200 cursor-not-allowed text-gray-500 input w-full border-[#707070] border-1 font-medium"
                }
                placeholder="Phone"
                type="text"
                required
                value={form.phone}
                error={errors.phone}
                maxLength="10"
                readOnly={userCountryName !== "Nepal"}
                onChange={
                  userCountryName !== "Nepal"
                    ? null
                    : (e) => handleFormChange("phone", e.target.value)
                }
              />
            </div>
            {/* <div>
              <Label label="Email (Optional)" />
              <Input
                placeholder="Email"
                type="text"
                value={form.email}
                error={errors.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div> */}
          </div>
          <div>
            <Label label="Scratch Coupon" />
            <Input
              placeholder="Coupon Code"
              type="text"
              value={form.couponCode}
              required
              onChange={(e) => handleFormChange("couponCode", e.target.value)}
            />
          </div>
          <div className="flex my-2">
            <div
              className={`w-5 h-5 flex items-center justify-center border rounded relative ${
                isChecked
                  ? "bg-[#262688] border-[#262688]"
                  : "bg-gray-100 border-gray-400"
              }`}
            >
              <input
                type="checkbox"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4"
                >
                  <path d="M20.285 6.707a1 1 0 0 0-1.414-1.414l-9.192 9.192-3.364-3.364a1 1 0 0 0-1.414 1.414l4.071 4.071a1 1 0 0 0 1.414 0l10-10z" />
                </svg>
              )}
            </div>
            <p className="mx-2">
              By Submitting, you agree to the <b>Terms and Privacy Policy</b>
            </p>
          </div>

          <div className="my-5">
            <Button
              type="submit"
              className="btn w-full text-lg border-none text-black font-bold bg-[#E9B72E] flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
