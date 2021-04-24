import React from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

import classes from "./SignUpForm.module.css";

const signUpForm = (props) => {
  const flexClassStyleArr = [classes.flexContainerGeneral];

  /**
   * If condition which are going to change the CSS classes
   * in relation to how many buttons need to be rendered, base on number of the passed event handlers
   */
  if (props.next && props.back)
    flexClassStyleArr.push(classes.flexContainerCentered);
  if (props.next && !props.back)
    flexClassStyleArr.push(classes.flexContainerToRight);

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
      <div className={flexClassStyleArr.join(" ")}>
        {props.back && (
          <div className={classes.buttonWrapper}>
            <Button assignedClass={"backButton"} clicked={props.back}>
              Back
            </Button>
          </div>
        )}
        {props.next && (
          <div className={classes.buttonWrapper}>
            <Button
              assignedClass={"nextButton"}
              clicked={props.next}
              buttonDisable={props.buttonDisable}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default signUpForm;
