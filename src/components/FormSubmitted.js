import React, { useEffect, useState } from "react";


const FormSubmitted = () => {

  let initialState = {
    name:"",
    phone:""
  }
  const [value, setValue] = useState(initialState);


  const fun = () => {
    setValue((preFun)=>({... preFun, ["name"]:"Rahul"}))
  }
  useEffect(()=>{
    fun();
  },[])
  console.log(value)

  

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-green-600">
        Form Submitted Successfully!
      </h1>
      <p className="text-gray-500 mt-2">
        Thank you for submitting your details.
      </p>
    </div>
  );
};

export default FormSubmitted;
