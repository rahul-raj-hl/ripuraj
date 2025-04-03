import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import Label from "./Label";
import validate from "./utils/validate";
import { useRouter } from "next/router";

const FormPage = () => {
  const router = useRouter();
  const initialState = {
    fName: "",
    lName: "",
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
    // console.log(value)
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrorMessage();

    const errorMsgObj = validate(
      form.fName,
      form.lName,
      form.email,
      form.phone
    );

    if (errorMsgObj) {
      if (!errorMsgObj.fName)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["fName"]: "First name must contain between 3 and 16 characters.",
        }));
      if (!errorMsgObj.lName)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["lName"]: "Last name must contain between 3 and 16 characters.",
        }));
      if (!errorMsgObj.email)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["email"]: "Enter a valid email address (e.g., example@gmail.com).",
        }));
      if (!errorMsgObj.phone)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["phone"]: "Phone number must be 10 digits long.",
        }));
      return;
    }

    //Make an API request to save the user data in the database.
    router.push("/formsubmitted");
  };

  const clearErrorMessage = () => {
    setErrors(initialState);
  };
// useEffect(()=>{
//   console.log(form)
// },[])
  return (
    <div className="card card-body shadow-2xl w-[80%] mx-auto my-10">
      <h2 className="text-2xl font-bold mx-auto my-2">Registration Form</h2>
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
              className="input w-full my-2"
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
          <Input className="checkbox" type="checkbox" />
          <p className="mx-2">
            Buy Submitting, you agree to the <b>Tearms and Privacy Policy</b>
          </p>
        </div>
        <div className="my-5">
          <button
            className="btn btn-success w-full text-lg font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
