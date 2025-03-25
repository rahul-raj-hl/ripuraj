const validate = (name, email, phone) => {
    const isNameValid = /^[A-Za-z ]{3,16}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPhoneNoValid = /^[6-9]\d{9}$/.test(phone)

    
  
    if (!isNameValid || !isEmailValid || !isPhoneNoValid)
      return { name: isNameValid, email: isEmailValid, phone:isPhoneNoValid };
    return null;
  };
  
  export default validate;
  