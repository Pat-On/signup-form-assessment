import React from "react";
import classes from "./button.module.css";

//TODO proper CSS and responsive
const button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={classes.Button}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
