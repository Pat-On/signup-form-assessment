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

  // TODO
  if (rules.isName) {
    isValid = true;
  }

  // TODO
  if (rules.isTelNumber) {
    isValid = true;
  }

  // TODO
  if (rules.isEighteen) {
    isValid = true;
  }

  return isValid;
};
