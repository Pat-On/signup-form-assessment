export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isName) {
    const pattern = /^[A-Za-z\s]+$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isTelNumber) {
    const pattern = /^\d{11}$/; //simple regex
    isValid = pattern.test(value) && isValid;
  }

  // TODO
  if (rules.isDOB) {
    isValid = true;
  }

  // TODO
  if (rules.isEighteen) {
    isValid = true;
  }

  return isValid;
};
