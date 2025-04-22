const validate = ({ firstName, lastName, email, phone }) => {
  const isFNameValid = /^[A-Za-z ]{3,16}$/.test(firstName);
  const isLNameValid = /^[A-Za-z ]{3,16}$/.test(lastName);
  const isEmailValid = email===""?true: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPhoneNoValid = /^[6-9]\d{9}$/.test(phone);

  

  if (!isFNameValid || !isLNameValid || !isEmailValid || !isPhoneNoValid) {
    return {
      isValid: false,
      errorMsg: {
        firstName: isFNameValid
          ? ""
          : "First name must contain between 3 and 16 characters.",
        lastName: isLNameValid
          ? ""
          : "Last name must contain between 3 and 16 characters.",
        email: isEmailValid
          ? ""
          : "Enter a valid email address (e.g., example@gmail.com).",
        phone: isPhoneNoValid ? "" : "Phone number must be 10 digits long.",
      },
    };
  }
  return {
    isValid: true,
    errorMsg: {},
  };
};

export default validate;
