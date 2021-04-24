import React, { useState } from "react";

import SignUpForm from "../../components/signUpForm/SignUpForm";
import ConfirmationFormPage from "../../components/confirmationFormPage/ConfirmationFormPage";
import CompletionFormScreen from "../../components/completionFormScreen/CompletionFormScreen";

import { checkValidity } from "../../utility/utility";

const FIRST_FORM_PAGE = 0;
const SECOND_FORM_PAGE = 1;
const THIRD_FORM_PAGE = 2;
const LAST_FORM_PAGE = 3;
const NAME_AND_PHONE_NUMBER_SLICE_INDEX = [0, 2];
const EMAIL_AND_DATE_OF_BIRTH_SLICE_INDEX = [2, 4];

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
      if (pageControl === FIRST_FORM_PAGE) return FIRST_FORM_PAGE;
      const page = pageControl;
      return page - 1;
    });
  };

  const nextFunction = () => {
    setPageControl(() => {
      if (pageControl === LAST_FORM_PAGE) return LAST_FORM_PAGE;
      const page = pageControl;
      return page + 1;
    });
  };

  const returnToMain = () => {
    setPageControl(FIRST_FORM_PAGE);
    //TODO Clear values in state
    let newState = { ...signForm };
    for (let key of Object.keys(signForm)) {
      newState = {
        ...newState,
        [key]: {
          ...newState[key],
          value: "",
          touched: false,
          valid: false,
        },
      };
    }
    setSignForm(newState);
  };

  //confirmation function faking sending data
  const confirmation = () => {
    setLoadingControl(true);
    setTimeout(() => {
      setPageControl(LAST_FORM_PAGE);
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
    case FIRST_FORM_PAGE:
      form = (
        <SignUpForm
          readonly={false}
          form={formElementKeyArray.slice(...NAME_AND_PHONE_NUMBER_SLICE_INDEX)}
          formInputHandler={inputChangeHandler}
          next={nextFunction}
          // buttonDisable={!(signForm.name.valid && signForm.number.valid)}
        />
      );
      break;
    case SECOND_FORM_PAGE:
      form = (
        <SignUpForm
          form={formElementKeyArray.slice(
            ...EMAIL_AND_DATE_OF_BIRTH_SLICE_INDEX
          )}
          formInputHandler={inputChangeHandler}
          back={backFunction}
          next={nextFunction}
          // buttonDisable={!(signForm.email.valid && signForm.dateOfBirth.valid)}
        />
      );
      break;
    case THIRD_FORM_PAGE:
      //here should be req
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
    case LAST_FORM_PAGE:
      form = <CompletionFormScreen back={returnToMain} />;
      break;
    default:
      console.log("You should never see that");
      break;
  }

  return <div>{form}</div>;
};

export default SignUp;
