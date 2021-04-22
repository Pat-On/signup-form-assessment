import React, { Fragment } from "react";
import Button from "./../UI/button/button";

const confirmationFormPage = (props) => {
  return (
    <Fragment>
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions.</p>
      {props.back && <Button clicked={props.back}> Main Page </Button>}
    </Fragment>
  );
};

export default confirmationFormPage;
