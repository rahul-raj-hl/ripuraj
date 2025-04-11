export const Input = ({ label = "", placeholder = "",className="input w-full bg-white border-[#707070] border-1 font-medium", error, ...rest }) => {
  return (
    <div className="">
      {rest.type === "textarea" && (
        <textarea className="textarea my-1" placeholder="Address" />
      )}
      {
        rest.type==="checkbox" && <input className={className} type={rest.type} required />
      }
     {
      rest.type==="text" && <input className={className} value={rest.value} onChange={rest.onChange} placeholder={placeholder} required {...rest} />
     }
        
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
