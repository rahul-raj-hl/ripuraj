import React, { useEffect, useState } from "react";

const FormSubmitted = () => {
  let initialState = {
    name: "",
    phone: "",
  };
  const [value, setValue] = useState(initialState);

  const fun = () => {
    setValue((preFun) => ({ ...preFun, ["name"]: "Rahul" }));
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <div className="card card-body mx-auto my-10 w-[80%] shadow-2xl text-center">
      <svg
        className="mx-auto"
        width="100"
        height="100"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="gold"
          stroke="orange"
          stroke-width="5"
        />

        <circle cx="100" cy="100" r="75" fill="goldenrod" opacity="0.5" />

        <g transform="translate(100, 100) rotate(45)">
          <path d="M 0,-20 Q 10,0 0,20 Q -10,0 0,-20" fill="yellow" />
          <path d="M -20,0 Q 0,-10 20,0 Q 0,10 -20,0" fill="yellow" />
        </g>

        <text
          x="100"
          y="30"
          font-size="12"
          fill="black"
          font-weight="bold"
          text-anchor="middle"
        >
          FINE GOLD 999.9
        </text>

        <text
          x="100"
          y="180"
          font-size="12"
          fill="black"
          font-weight="bold"
          text-anchor="middle"
        >
          RUPALI
        </text>
      </svg>
      <div className="">
        <h1 className="font-bold text-5xl text-green-600">Thank You!</h1>
        <p className="font-bold text-2xl text-green-600">
          For Your Participation
        </p>
        <p className="text-gray-500 mt-4">
          A Lucky Draw will be held on the 5th of every month. The coupon codes
          of the winners will be published on the company<span>&apos;</span>s website. The prizes
          will be sent to the winners at their provided address.
        </p>
      </div>
    </div>
  );
};

export default FormSubmitted;
