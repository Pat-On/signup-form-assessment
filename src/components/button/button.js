import React from "react";
import classes from "./button.module.css";

const button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={classes.Button}
      onClick={props.clicked}
    >
      {/* {props.children} */}
      Button
    </button>
  );
};

export default button;
