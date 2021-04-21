import React, { useState } from "react";
import SignUpForm from "../../components/signUpForm/signUpForm";

const SignUp = (props) => {
  // !TODO think over how to control name + p. num / email + DOB / confirmation / completion screen
  const [signForm, setGisngForm] = useState({
    // !TODO Think over validation requirements - name / phone number / email / DOB 18++
    // !TODO form of the "data"
  });

  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
