const validate = ({ name, phone, postalCode, state }) => {
  const isNameValid = /^[A-Za-z ]{3,50}$/.test(name);
  const isPhoneNoValid = /^[6-9]\d{9}$/.test(phone);
  const isPostalCode = /^(?:[1-9]\d{5}|\d{5})$/.test(postalCode);
  const isStateValid = state !== "";

  if (
    !isNameValid ||
    !isPhoneNoValid ||
    !isPostalCode ||
    !isStateValid
  ) {
    return {
      isValid: false,
      errorMsg: {
        name: isNameValid
          ? ""
          : "Name must contain between 3 and 50 characters.",
        phone: isPhoneNoValid
          ? ""
          : "Phone number must be 10 digits long and valid.",
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
