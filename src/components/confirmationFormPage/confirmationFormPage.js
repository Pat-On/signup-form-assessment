import React, { Fragment } from "react";
import UnorderedList from "./../UI/unorderedList/unorderedList";
import Button from "./../UI/button/button";

const confirmationFormPage = (props) => {
  return (
    <Fragment>
      <h1>Confirmation</h1>
      <UnorderedList
        formValues={props.formValues}
        formElementsKey={props.formElementsKey}
      />
      {props.back && <Button clicked={props.back}>Back</Button>}
      {props.next && <Button clicked={props.next}>Confirm & Continue</Button>}
    </Fragment>
  );
};

export default confirmationFormPage;
