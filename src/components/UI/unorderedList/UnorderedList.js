import React, { Fragment } from "react";
import ListElement from "./listElement/ListElement";

import classes from "./UnorderedList.module.css";

/**
 * @DescriptionFunction Component responsible for rendering the unordered list created for need of the ConfirmationFormPage component
 * @param {Array of Object} props.formValues [Config object - data needed to render the <ListElement>s]
 */
const unorderedList = (props) => {
  const keyObjectArr = [];
  for (let key in props.formValues) {
    keyObjectArr.push(key);
  }

  const elementsOfList = keyObjectArr.map((key) => {
    return (
      <Fragment key={props.formValues[key].placeholder}>
        <ListElement bolded={true} value={props.formValues[key].name + ":"} />
        <ListElement value={props.formValues[key].value} />
      </Fragment>
    );
  });

  return <ul className={classes.NoneStyle}>{elementsOfList}</ul>;
};

export default unorderedList;
