import React from "react";

const Select = ({
  className,
  optionValue,
  label = "",
  placeholder = "",
  value,
}) => {
  return (
    <div className="my-1">
      <label>{label}</label>
      <select className={"select my-1 "+className} value={value}>
        
        {optionValue.map((state) => (
          <option key={state}>{state}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

{/* <div className="my-1">
      <label>{label}</label>
        <select className='select my-1'  defaultValue="Select State">
        <option disabled={true} value="Select State">Select State</option>
            {
                STATE_NAME.map((state)=><option key={state}>{state}</option>)
            }
        </select>
    </div> */}
