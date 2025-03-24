"use client";
import { useRef, useState } from "react";
import validate from "../utils/validate";
import { STATE_NAME, BG_IMAGE } from "../utils/mockData";
import { useRouter } from "next/navigation";
import { Input } from "./Input";

const userSchema = MithuValidator({
  name: MithuValidator.min(2),
});

const validationJson = {
  name: {min:2, type:}
}

const validator = (obj, validationJson) => {
  if(obj.name) {
    const schema = validationJson[name]
  }
}

const Form = () => {
  const router = useRouter();
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleFormChange = (keyName, value) => {
    setForm((prevForm) => ({ ...prevForm, [keyName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrorMessage();

    const messageObj = validate(
      name.current.value,
      email.current.value,
      phone.current.value
    );

    if (messageObj !== null) {
      if (!messageObj.name) setErrMessageForName("Name is not Valid");
      if (!messageObj.email) setErrMessageForEmail("Email is not Valid");
      if (!messageObj.phone) setErrMessageForPhone("Phone Number is not Valid");
      return;
    }

    //Make an API request to save the user data in the database.
    router.push("/formsubmitted");
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
              label="Phon Number"
              onChange={(e) => handleFormChange("phone", e.target.value)}
              placeholder="Phone Number"
            />
            <Input value={form.email} label="Email" placeholder="Email" />
            <Input
              value={form.address}
              label="Address"
              placeholder="Address"
              type="textarea"
            />
            <Input value={""} label="City" placeholder="City" type="textarea" />
            <Input
              value={""}
              label="State"
              placeholder="State"
              type="textarea"
            />
            <Input
              value={""}
              label="Pincode"
              placeholder="Pincode"
              type="textarea"
            />
            <Input
              value={""}
              label="Coupon Code"
              placeholder="Coupon Code"
              type="textarea"
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
