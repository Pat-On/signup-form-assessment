import React, { useState } from "react";

import SignUpForm from "../../components/signUpForm/signUpForm";
import ConfirmationFormPage from "./../../components/confirmationFormPage/confirmationFormPage";
import CompletionFormScreen from "./../../components/completionFormScreen/completionFormScreen";

import { checkValidity } from "./../../utility/utility";

const SignUp = () => {
  const [pageControl, setPageControl] = useState(0);
  const [loadingControl, setLoadingControl] = useState(false);

  const [signForm, setSignForm] = useState({
    name: {
      name: "Name",
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
      name: "Phone Number",
      placeholder: "01234567890",
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
      name: "E-mail",
      placeholder: "example@email.com",
      value: "patryk@net.com", // FAKE DATA FOR DEV
      // value: "",

      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    dateOfBirth: {
      name: "Date of birth",
      placeholder: "dd/mm/yyyy",
      // value: "",
      value: "01/01/1990", // FAKE DATA FOR DEV

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
    let newState = { ...signForm };
    for (let key of Object.keys(signForm)) {
      console.log(key);
      newState = {
        ...newState,
        [key]: {
          ...newState[key],
          value: "",
        },
      };
    }
    // setSignForm(newState);
  };

  //confirmation function faking sending data
  const confirmation = () => {
    setLoadingControl(true);
    setTimeout(() => {
      console.log("1");
      setPageControl(3);
      setLoadingControl(false);
    }, 800);
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
          loadingControl={loadingControl}
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
