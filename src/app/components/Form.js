"use client";
import { useRef, useState } from "react";
import validate from "../utils/validate";
import { stateName, BG_IMAGE } from "../utils/mockData";

const Form = () => {
  const [errMessageForName, setErrMessageForName] = useState("");
  const [errMessageForEmail, setErrMessageForEmail] = useState("");
  const [errMessageForPhone, setErrMessageForPhone] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const handleSubmit = () => {
    clearErrorMessage();

    const message = validate(
      name.current.value,
      email.current.value,
      phone.current.value
    );
    
    if (!message){
      //Make an API request to save the user data in the database.
      return;
    } 

    if (!message.name) setErrMessageForName("Name is not Valid");
    if (!message.email) setErrMessageForEmail("Email is not Valid");
    if (!message.phone) setErrMessageForPhone("Phone Number is not Valid");

    
  };

  const clearErrorMessage = () => {
    setErrMessageForName("");
    setErrMessageForEmail("");
    setErrMessageForPhone("");
  };

  const handleStateSelect = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="absolute">
        <img className="opacity-10" alt="bg-img" src={BG_IMAGE} />
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="card bg-base-300 w-96 shadow-xl  absolute left-0 right-0 mx-auto my-10">
          
          <div className="card-body ml-[2%]">

            <div className="my-1">
              <p>Enter Name </p>
              <input ref={name} type="text" className="grow input my-1" placeholder="First Name" required/>
              <p className="text-red-500">{errMessageForName}</p>
            </div>

            <div className="my-1">
              <p>Enter Phone Number</p>
              <input className="grow input my-1" ref={phone} placeholder="Phone Number" />
              <p className="text-red-500">{errMessageForPhone}</p>
            </div>

            <div className="my-1">
              <p>Enter Email</p>
              <input type="email" ref={email} className="grow input my-1" placeholder="Email" />
              <p className="text-red-500">{errMessageForEmail}</p>
            </div>

            <div className="my-1">
              <p>Enter Address</p>
              <textarea className="textarea my-1" placeholder="Enter your Addrss"></textarea>
            </div>

            <div className="my-1">
              <p>City</p>
              <input type="text" className="input my-1" placeholder="City" />
            </div>

            <div className="my-1">
              <p>State</p>
              <select
                defaultValue="Select State"
                className="select my-1"
                onChange={handleStateSelect}
              >
                <option disabled={true} value="Select State">Select State</option>
                {stateName.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="my-1">
              <p>Pin Code</p>
              <input type="text" className="input my-1" placeholder="Pin Code" />
            </div>

            <div className="my-1">
              <p>Coupon Code</p>
              <input type="text" className="input my-1" placeholder="Coupon Code" />
            </div>

            <div className="flex my-1">
              <button className="btn btn-success w-40 text-xl  my-1 mx-auto" onClick={handleSubmit}>
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
