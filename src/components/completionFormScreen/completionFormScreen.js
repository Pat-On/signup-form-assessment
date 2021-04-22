import React, { Fragment } from "react";
import Button from "./../UI/button/button";

import classes from "./completionFormScreen.module.css";

const confirmationFormPage = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Thank You For Your Submission</h1>
      <p className={classes.subTitle}>
        You will get an email with further instructions.
      </p>
      {props.back && (
        <Button assignedClass={"nextButton"} clicked={props.back}>
          {" "}
          Main Page{" "}
        </Button>
      )}
    </div>
  );
};

export default confirmationFormPage;
