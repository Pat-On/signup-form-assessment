import React from "react";
import Input from "../input/input";
import Button from "../button/button";

const signUpForm = (props) => {
  return (
    <div>
      <h1>Sign-up Form</h1>
      {props.form.map((item) => {
        return (
          <Input
            key={item.id}
            value={item.config.value}
            placeholder={item.config.placeholder}
            formInputHandler={(e) => props.formInputHandler(e, item.id)}
          />
        );
      })}
      {props.back && <Button clicked={props.back}> back </Button>}
      {props.next && <Button clicked={props.next}> next </Button>}
    </div>
  );
};

export default signUpForm;
