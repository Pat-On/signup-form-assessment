import React from "react";
import Input from "../UI/input/input";
import Button from "../UI/button/button";

import classes from "./signUpForm.module.css";

const signUpForm = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Sign-Up</h1>
      {props.form.map((item) => {
        return (
          <div className={classes.inputContainer} key={item.id}>
            <p className={classes.inputFieldName}>{item.config.name}</p>
            <Input
              invalid={!item.config.valid}
              shouldValidate={item.config.validation}
              touched={item.config.touched}
              value={item.config.value}
              placeholder={item.config.placeholder}
              formInputHandler={(e) => props.formInputHandler(e, item.id)}
            />
          </div>
        );
      })}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {props.back && (
          <Button assignedClass={"backButton"} clicked={props.back}>
            Back
          </Button>
        )}
        {props.next && (
          <Button
            assignedClass={"nextButton"}
            clicked={props.next}
            buttonDisable={props.buttonDisable}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default signUpForm;
