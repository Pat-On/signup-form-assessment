import React, { useState } from "react";

import SignUpForm from "../../components/signUpForm/signUpForm";
import ConfirmationFormPage from "./../../components/confirmationFormPage/confirmationFormPage";
import CompletionFormScreen from "./../../components/completionFormScreen/completionFormScreen";

import { checkValidity } from "./../../utility/utility";

const SignUp = () => {
  const [pageControl, setPageControl] = useState(0);

  // !TODO think over how to control name + p. num / email + DOB / confirmation / completion screen
  const [signForm, setSignForm] = useState({
    // !TODO Think over validation requirements - name / phone number / email / DOB 18++
    // !TODO form of the "data"
    name: { placeholder: "name", value: "" },
    number: { placeholder: "number", value: "" },
    email: { placeholder: "email", value: "" },
    dayOfBirth: { placeholder: "DOB", value: "" },
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

  const inputChangeHandler = (e, formName) => {
    const updatedForm = {
      ...signForm,
      [formName]: {
        ...signForm[formName],
        value: e.target.value,
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

  // const chosenTwoFormElements = formElementKeyArray.slice(
  //   pageControl,
  //   pageControl + 2
  // );
  // console.log(chosenTwoFormElements);

  let form = "";
  switch (pageControl) {
    case 0:
      form = (
        <SignUpForm
          readonly={false}
          form={formElementKeyArray.slice(0, 2)}
          formInputHandler={inputChangeHandler}
          next={nextFunction}
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
        />
      );
      break;
    case 2:
      //here should be req
      //TODO: confirmation page
      form = <ConfirmationFormPage back={backFunction} next={nextFunction} />;
      break;
    case 3:
      //TODO: completion page
      form = <CompletionFormScreen back={backFunction} next={nextFunction} />;
      break;
    default:
      console.log("You should never see that");
      break;
  }

  return <div>{form}</div>;
};

export default SignUp;
