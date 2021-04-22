import React, { Fragment } from "react";
import ListElement from "./listElement/listElement";

const unorderedList = (props) => {
  console.log(props.formElementsKey);
  const keyObjectArr = [];
  for (let key in props.formValues) {
    keyObjectArr.push(key);
  }
  console.log(props.formElementsKey);

  return (
    <ul>
      {keyObjectArr.map((key, index) => {
        return (
          <Fragment key={props.formValues[key].placeholder}>
            <ListElement value={props.formValues[key].placeholder} />
            <ListElement value={props.formValues[key].value} />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default unorderedList;
