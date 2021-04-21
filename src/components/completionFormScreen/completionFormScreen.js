import React, { Fragment } from "react";
import Button from "./../UI/button/button";

const confirmationFormPage = (props) => {
  return (
    <Fragment>
      <h1>Confirmation Screen - building</h1>
      {props.back && <Button clicked={props.back}> back </Button>}
      {props.next && <Button clicked={props.next}> next </Button>}
    </Fragment>
  );
};

export default confirmationFormPage;
