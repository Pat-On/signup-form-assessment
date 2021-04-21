import React from "react";
import Input from "../input/input";
import Button from "../button/button";

const signUpForm = (props) => {
  return (
    <div>
      <h1>Sign-up Form</h1>
      {props.form.map((item, index) => {
        return <Input key={index} string={item.id} />;
      })}
      {props.back && <Button clicked={props.back}> back </Button>}
      {props.next && <Button clicked={props.next}> next </Button>}
    </div>
  );
};

export default signUpForm;
