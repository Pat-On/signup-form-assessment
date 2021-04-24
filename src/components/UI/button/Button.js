import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  let button = (
    <button
      className={[classes.Button, classes[props.assignedClass]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );

  /**
   * If statement which is going to re-sign the button with additional property: disabled
   *  dependency: props.buttonDisable
   */
  if (props.buttonDisable) {
    button = (
      <button
        disabled
        className={[classes.Button, classes[props.assignedClass]].join(" ")}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    );
  }

  return button;
};

export default button;
