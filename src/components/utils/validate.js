const validate = ({ firstName, lastName, email, phone, postalCode, state }) => {
  const isFNameValid = /^[A-Za-z ]{3,16}$/.test(firstName);
  const isLNameValid = /^[A-Za-z ]{3,16}$/.test(lastName);
  const isEmailValid = email===""?true: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPhoneNoValid = /^[6-9]\d{9}$/.test(phone);
  // const isPostalCode = /^\d{6}$/.test(postalCode)
  const isPostalCode = /^(?:[1-9]\d{5}|\d{5})$/.test(postalCode);
  const isStateValid = state !== ""; 

  // console.log("phobe",isPhoneNoValid)
  

  if (!isFNameValid || !isLNameValid || !isEmailValid || !isPhoneNoValid || !isPostalCode || !isStateValid) {
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
        phone: isPhoneNoValid ? "" : "Phone number must be 10 digits long and valid.",
        postalCode: isPostalCode ? "" : "Please enter a valid PIN code.",
        state: isStateValid ? "" : "State is required.",
      },
    };
  }
  return {
    isValid: true,
    errorMsg: {},
  };
};

export default validate;
