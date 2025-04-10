import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "./Input";
import Label from "./Label";
import Button from "./Button";
import Image from "next/image";
import validate from "./utils/validate";
import { createUser } from "./utils/store";


const campaignId = "gold-scheme";


const FormPage = () => {
  const router = useRouter();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
    couponCode: "",
  };
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleFormChange = (keyName, value) => {
    setForm((prevForm) => ({ ...prevForm, [keyName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrorMessage();
    const errorMsgObj = validate(form);
    if (errorMsgObj.isValid) {
      //Make an API request to save the user data in the database.
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
          state: form.region,
          pincode: form.postalCode,
          country: form.country,
        },
      };

      const [, error] = await createUser(userDetail);
      if (error) {
        alert(error);
      } else {
        router.push("/formsubmitted");
      }
    }
    setErrors(errorMsgObj.errorMsg);
  };

  const clearErrorMessage = () => {
    setErrors(initialState);
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Desktop background image */}
      <Image
        src="/MainForm_bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="hidden md:block absolute inset-0 z-0 opacity-90"
        priority
      />

      {/* Mobile background image */}
      <Image
        src="/MainForm_bg_mobile.jpg"
        alt="Mobile Background"
        layout="fill"
        objectFit="cover"
        className="block md:hidden absolute inset-0 z-0 opacity-90"
        priority
      />

      <div className="card card-body mx-4 my-6 md:mx-32 md:my-10 shadow-2xl w-full md:w-[80%] bg-white text-black z-10">
        <h2 className="text-2xl font-bold  my-2">Registration Form</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Label label="Name" />
            <div className="grid grid-cols-2 gap-5">
              <Input
                placeholder="First"
                type="text"
                value={form.fName}
                error={errors.fName}
                onChange={(e) => handleFormChange("fName", e.target.value)}
              />
              <Input
                placeholder="Last"
                type="text"
                value={form.lName}
                error={errors.lName}
                onChange={(e) => handleFormChange("lName", e.target.value)}
              />
            </div>
          </div>
          <div className="my-2">
            <Label label="Address" />
            <div>
              <Input
                placeholder="Street Address"
                type="text"
                value={form.address1}
                onChange={(e) => handleFormChange("address1", e.target.value)}
              />
              <Input
                className="input w-full my-2 bg-white border-[#707070] border-1"
                placeholder="Street Address Line 2"
                type="text"
                value={form.address2}
                onChange={(e) => handleFormChange("address2", e.target.value)}
              />
            </div>
          </div>
          <div className="my-2">
            <div className="grid grid-cols-2 gap-5">
              <Input
                placeholder="City"
                type="text"
                value={form.city}
                onChange={(e) => handleFormChange("city", e.target.value)}
              />
              <Input
                placeholder="Region"
                type="text"
                value={form.region}
                onChange={(e) => handleFormChange("region", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <Input
                placeholder="Postal / Zip Code"
                type="text"
                value={form.postalCode}
                onChange={(e) => handleFormChange("postalCode", e.target.value)}
              />
              <Input
                placeholder="Country"
                type="text"
                value={form.country}
                onChange={(e) => handleFormChange("country", e.target.value)}
              />
            </div>
          </div>
          <div className="my-2 grid grid-cols-2 gap-5">
            <div className="">
              <Label label="Phone *" />
              <Input
                className="bg-gray-200 text-gray-500  input w-full border-[#707070] border-1 font-medium"
                placeholder="Phone"
                type="text"
                value={form.phone}
                error={errors.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
              />
            </div>
            <div>
              <Label label="Email" />
              <Input
                placeholder="Email"
                type="text"
                value={form.email}
                error={errors.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label label="Scratch Coupon" />
            <div className="">
              <Input
                placeholder="Coupon Code"
                type="text"
                value={form.couponCode}
                onChange={(e) => handleFormChange("couponCode", e.target.value)}
              />
            </div>
          </div>
          <div className="flex my-2">
            <Input
              className="w-4 h-4 text-white bg-gray-100 rounded-sm "
              type="checkbox"
            />
            <p className="mx-2">
              Buy Submitting, you agree to the <b>Tearms and Privacy Policy</b>
            </p>
          </div>
          <div className="my-5">
            {/* <button
            className="btn w-full text-lg border-none text-black font-bold bg-[#E9B72E]"
            type="submit"
          >
            Submit
          </button> */}
            <Button
              type="submit"
              className="btn w-full text-lg border-none text-black font-bold bg-[#E9B72E]"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
