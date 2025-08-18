import React from "react";

const Select = ({ className, optionValue, onChange, value,initialSelectedValue, required, error }) => {
  return (
    <div>
      <select
        className={"select " + className}
        onChange={onChange}
        value={value}
        required={required}
      >
        {initialSelectedValue && <option disabled selected>{initialSelectedValue}</option>}
        {optionValue.map((val) => (
          <option className="bg-white font-medium hover:bg-[#E9B72E] " key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Select;

{
  /* <div className="my-1">
      <label>{label}</label>
        <select className='select my-1'  defaultValue="Select State">
        <option disabled={true} value="Select State">Select State</option>
            {
                STATE_NAME.map((state)=><option key={state}>{state}</option>)
            }
        </select>
    </div> */
}
