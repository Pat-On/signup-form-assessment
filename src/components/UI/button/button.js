import React from "react";
import classes from "./button.module.css";

//TODO proper CSS and responsive
const button = (props) => {
  let button = (
    <button className={classes.Button} onClick={props.clicked}>
      {props.children}
    </button>
  );
  if (props.buttonDisable) {
    button = (
      <button disabled className={classes.Button} onClick={props.clicked}>
        {props.children}
      </button>
    );
  }

  return button;
};

export default button;
