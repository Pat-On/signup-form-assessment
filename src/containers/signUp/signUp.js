import React, { useState } from "react";
import SignUpForm from "../../components/signUpForm/signUpForm";

const SignUp = (props) => {
  const [pageControl, setPageControl] = useState(0);

  // !TODO think over how to control name + p. num / email + DOB / confirmation / completion screen
  const [signForm, setSignForm] = useState({
    // !TODO Think over validation requirements - name / phone number / email / DOB 18++
    // !TODO form of the "data"
    name: { placeholder: "name" },
    number: { placeholder: "number" },
    email: { placeholder: "email" },
    dayOfBirth: { placeholder: "DOB" },
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

  const formElementKeyArray = [];
  for (let key in signForm) {
    console.log("run");
    console.log(pageControl);
    formElementKeyArray.push({
      id: key,
    });
  }

  const chosenTwoFormElements = formElementKeyArray.slice(
    pageControl,
    pageControl + 2
  );
  console.log(chosenTwoFormElements);

  let form = "";
  switch (pageControl) {
    case 0:
      form = (
        <SignUpForm
          form={formElementKeyArray.slice(0, 2)}
          next={nextFunction}
        />
      );
      break;
    case 1:
      form = (
        <SignUpForm
          form={formElementKeyArray.slice(2, 4)}
          back={backFunction}
          next={nextFunction}
        />
      );
      break;
    case 2:
      console.log(formElementKeyArray);
      form = (
        <SignUpForm
          form={formElementKeyArray}
          back={backFunction}
          next={nextFunction}
        />
      );
      break;
    case 3:
      form = <h1>Success</h1>;
      break;
  }

  return <div>{form}</div>;
};

export default SignUp;
