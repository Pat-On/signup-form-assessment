import React from "react";
import Input from "../UI/input/input";
import Button from "../UI/button/button";

const signUpForm = (props) => {
  return (
    <div>
      <h1>Sign-up Form</h1>
      {props.form.map((item) => {
        return (
          <Input
            invalid={!item.config.valid}
            shouldValidate={item.config.validation}
            touched={item.config.touched}
            key={item.id}
            value={item.config.value}
            placeholder={item.config.placeholder}
            formInputHandler={(e) => props.formInputHandler(e, item.id)}
          />
        );
      })}
      {props.back && <Button clicked={props.back}>Back</Button>}
      {props.next && (
        <Button clicked={props.next} buttonDisable={props.buttonDisable}>
          Next
        </Button>
      )}
    </div>
  );
};

export default signUpForm;
