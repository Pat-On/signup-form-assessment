import React, { Fragment } from "react";
import UnorderedList from "./../UI/unorderedList/unorderedList";
import Button from "./../UI/button/button";

const confirmationFormPage = (props) => {
  return (
    <Fragment>
      <h1>Confirmation</h1>
      <UnorderedList />
      {props.back && <Button clicked={props.back}> back </Button>}
      {props.next && <Button clicked={props.next}> next </Button>}
    </Fragment>
  );
};

export default confirmationFormPage;
