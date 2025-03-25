export const Input = ({ label = "", placeholder = "", error, ...rest }) => {
  
  return (
    <div className="my-1">
      <label>{label}</label>

      {rest.type === "textarea" ? (
        <textarea className="textarea my-1" placeholder="Address" />
      ) : (
        <input
          className="grow input my-1"
          placeholder={placeholder}
          {...rest}
        />
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
