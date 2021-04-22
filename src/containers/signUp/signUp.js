import React, { useState } from "react";

import SignUpForm from "../../components/signUpForm/signUpForm";
import ConfirmationFormPage from "./../../components/confirmationFormPage/confirmationFormPage";
import CompletionFormScreen from "./../../components/completionFormScreen/completionFormScreen";

import { checkValidity } from "./../../utility/utility";

const SignUp = () => {
  const [pageControl, setPageControl] = useState(0);

  const [signForm, setSignForm] = useState({
    name: {
      placeholder: "Name",
      value: "Patryk", // FAKE DATA FOR DEV
      // value: "",

      validation: {
        required: true,
        isName: true,
      },
      valid: false,
      touched: false,
    },
    number: {
      placeholder: "Phone number",
      value: "01234567890", // FAKE DATA FOR DEV
      // value: "",

      validation: {
        required: true,
        isTelNumber: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      placeholder: "Email",
      // value: "patryk@net.com", // FAKE DATA FOR DEV
      value: "",

      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    dateOfBirth: {
      placeholder: "Date of birth",
      value: "",
      // value: "01/01/1990", // FAKE DATA FOR DEV

      validation: {
        required: true,
        isDOB: true,
        isEighteen: true,
      },
      valid: false,
      touched: false,
    },
  });

  const backFunction = () => {
    setPageControl(() => {
      if (pageControl === 0) return 0;
      const page = pageControl;
      return page - 1;
    });
  };

  const nextFunction = () => {
    setPageControl(() => {
      if (pageControl === 3) return 3;
      const page = pageControl;
      return page + 1;
    });
  };

  const returnToMain = () => {
    setPageControl(0);
    //TODO Clear values in state
  };

  //TODO - finish it:
  //confirmation function faking sending data
  const confirmation = () => {
    setPageControl(3);
  };

  const inputChangeHandler = (e, formName) => {
    const updatedForm = {
      ...signForm,
      [formName]: {
        ...signForm[formName],
        value: e.target.value,
        touched: true,
        valid: checkValidity(e.target.value, signForm[formName].validation),
      },
    };
    setSignForm(updatedForm);
  };

  const formElementKeyArray = [];
  for (let key in signForm) {
    formElementKeyArray.push({
      id: key,
      config: signForm[key],
    });
  }

  let form = "";
  switch (pageControl) {
    case 0:
      form = (
        <SignUpForm
          readonly={false}
          form={formElementKeyArray.slice(0, 2)}
          formInputHandler={inputChangeHandler}
          next={nextFunction}
          // buttonDisable={!(signForm.name.valid && signForm.number.valid)}
        />
      );
      break;
    case 1:
      form = (
        <SignUpForm
          form={formElementKeyArray.slice(2, 4)}
          formInputHandler={inputChangeHandler}
          back={backFunction}
          next={nextFunction}
          // buttonDisable={!(signForm.email.valid && signForm.dateOfBirth.valid)}
        />
      );
      break;
    case 2:
      //here should be req
      console.log(formElementKeyArray);
      form = (
        <ConfirmationFormPage
          back={backFunction}
          next={confirmation}
          formValues={signForm}
          formElementsKey={formElementKeyArray}
        />
      );
      break;
    case 3:
      form = <CompletionFormScreen back={returnToMain} />;
      break;
    default:
      console.log("You should never see that");
      break;
  }

  return <div>{form}</div>;
};

export default SignUp;
