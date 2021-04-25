import moment from "moment";

const MINIMAL_REQUIRED_AGE = 18;

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

  // TODO - Think over how to improve it
  if (rules.isDOB) {
    isValid = moment(value, "DD/MM/YYYY", true).isValid() && isValid;
  }

  if (rules.isEighteen) {
    // console.log(rules);
    // console.log(value);
    // console.log("?");
    // console.log(moment(value, "DD/MM/YYYY", true).isValid());
    if (moment(value, "DD/MM/YYYY", true).isValid()) {
      // console.log(rules);
      // const data = new Date(value);
      const birthday = moment(value, "DD/MM/YYYY");
      // console.log(birthday);
      //TODO Improvement BUGy solution
      // console.log(moment().diff(birthday, "years", false));
      isValid =
        moment().diff(birthday, "years", false) >= MINIMAL_REQUIRED_AGE &&
        isValid;
    }
  }

  return isValid;
};
