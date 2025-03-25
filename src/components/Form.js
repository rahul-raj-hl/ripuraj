"use client";
import { useState } from "react";
import validate from "./utils/validate";
import { STATE_NAME, BG_IMAGE } from "./utils/mockData";
import { Input } from "./Input";
import Select from "./Select";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleFormChange = (keyName, value) => {
    setForm((prevForm) => ({ ...prevForm, [keyName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrorMessage();

    const messageObj = validate(form.name, form.email, form.phone);
    
    if (messageObj !== null) {
      
      if (!messageObj.name)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["name"]: "Name is Not Valid",
        }));
      if (!messageObj.email)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["email"]: "Email is Not Valid",
        }));
      if (!messageObj.phone)
        setErrors((preErrorMsg) => ({
          ...preErrorMsg,
          ["phone"]: "Phone is Not Valid",
        }));
      return;
    }

    //Make an API request to save the user data in the database.
  };

  const clearErrorMessage = () => {
    setErrors(initialState);
  };

  const handleStateSelect = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="absolute">
        <img className="opacity-10" alt="bg-img" src={BG_IMAGE} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="card bg-base-300 w-96 shadow-xl  absolute left-0 right-0 mx-auto my-10">
          <div className="card-body ml-[2%]">
            <Input
              value={form.name}
              error={errors.name}
              label="Enter Name"
              onChange={(e) => handleFormChange("name", e.target.value)}
              placeholder="First Name"
            />
            <Input
              value={form.phone}
              error={errors.phone}
              label="Phone Number"
              onChange={(e) => handleFormChange("phone", e.target.value)}
              placeholder="Phone Number"
            />
            <Input
              value={form.email}
              error={errors.email}
              label="Email"
              onChange={(e) => handleFormChange("email", e.target.value)}
              placeholder="Email"
            />
            <Input
              value={form.address}
              label="Address"
              onChange={(e) => handleFormChange("address", e.target.value)}
              placeholder="Address"
              type="textarea"
            />
            <Input
              value={""}
              label="City"
              onChange={(e) => handleFormChange("city", e.target.value)}
              placeholder="City"
              type="text"
            />
            <Input
              value={""}
              label="Pincode"
              onChange={(e) => handleFormChange("pincode", e.target.value)}
              placeholder="Pincode"
              type="text"
            />
            <Select
              value={""}
              label="State"
              onChange={(e) => handleFormChange("state", e.target.value)}
              placeholder="State"
              STATE_NAME={STATE_NAME}
              type="text"
            />
            <Input
              value={""}
              label="Coupon Code"
              onChange={(e) => handleFormChange("coupon", e.target.value)}
              placeholder="Coupon Code"
              type="text"
            />
            <div className="flex my-1">
              <button
                className="btn btn-success w-40 text-xl  my-1 mx-auto"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
