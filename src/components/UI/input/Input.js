import React from "react";
import classes from "./Input.module.css";

//TODO proper CSS and responsive
const input = (props) => {
  const inputCSSClasses = [classes.inputClass];

  /**
   * If condition which are going to change the CSS classes
   * CSS class Invalid is going to emphasise incorrect input
   */
  if (props.invalid && props.shouldValidate && props.touched) {
    inputCSSClasses.push(classes.Invalid);
  }

  return (
    <input
      className={inputCSSClasses.join(" ")}
      placeholder={props.placeholder}
      onChange={props.formInputHandler}
      value={props.value}
      {...props.elementConfig}
    />
  );
};

export default input;
