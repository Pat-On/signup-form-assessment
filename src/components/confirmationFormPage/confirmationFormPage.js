import React, { Fragment } from "react";
import UnorderedList from "./../UI/unorderedList/unorderedList";
import Button from "./../UI/button/button";

import classes from "./confirmationFormPage.module.css";

const confirmationFormPage = (props) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Confirmation</h1>
      <UnorderedList
        formValues={props.formValues}
        formElementsKey={props.formElementsKey}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {props.back && (
          <Button assignedClass={"backButton"} clicked={props.back}>
            Back
          </Button>
        )}
        {props.next && (
          <Button assignedClass={"nextButton"} clicked={props.next}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default confirmationFormPage;
