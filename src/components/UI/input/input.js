import React from "react";
import classes from "./input.module.css";

//TODO proper CSS and responsive
const input = (props) => {
  const inputCSSClasses = [];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputCSSClasses.push(classes.Invalid);
  }

  return (
    <input
      className={inputCSSClasses.join(" ")}
      style={{ display: "block", margin: "auto" }}
      placeholder={props.placeholder}
      onChange={props.formInputHandler}
      value={props.value}
      {...props.elementConfig}
    />
  );
};

export default input;
