const validate = (fName, lName, email, phone) => {
  console.log(fName,lName,email,phone)
    const isFNameValid = /^[A-Za-z ]{3,16}$/.test(fName);
    const isLNameValid = /^[A-Za-z ]{3,16}$/.test(lName);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPhoneNoValid = /^[6-9]\d{9}$/.test(phone)

    
  
    if (!isFNameValid || !isLNameValid || !isEmailValid || !isPhoneNoValid)
      return { fName: isFNameValid, lName:isLNameValid, email: isEmailValid, phone:isPhoneNoValid };
    return null;
  };
  
  export default validate;
  