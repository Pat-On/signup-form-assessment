import React from "react";
import UnorderedList from "./../UI/unorderedList/unorderedList";
import Button from "./../UI/button/button";

import classes from "./confirmationFormPage.module.css";

const confirmationFormPage = (props) => {
  const flexClassStyleArr = [classes.flexContainerGeneral];

  if (props.next && props.back)
    flexClassStyleArr.push(classes.flexContainerCentered);
  if (props.next && !props.back)
    flexClassStyleArr.push(classes.flexContainerToRight);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Confirmation</h1>
      <UnorderedList
        formValues={props.formValues}
        formElementsKey={props.formElementsKey}
      />
      <div className={flexClassStyleArr.join(" ")}>
        {props.back && (
          <div className={classes.buttonWrapper}>
            <Button assignedClass={"backButton"} clicked={props.back}>
              Back
            </Button>
          </div>
        )}
        {props.next && (
          <div className={classes.buttonWrapper}>
            <Button assignedClass={"nextButton"} clicked={props.next}>
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default confirmationFormPage;
