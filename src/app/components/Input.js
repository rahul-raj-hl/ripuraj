export const Input = ({ label = "", placeholder = "", errorMsg, ...rest }) => {
  return (
    <div className="my-1">
      <label>{label}</label>
      <input className="grow input my-1" placeholder={placeholder} {...rest} />
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};
