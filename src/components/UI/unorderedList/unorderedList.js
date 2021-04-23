import React, { Fragment } from "react";
import ListElement from "./listElement/listElement";

import classes from "./unorderedList.module.css";

const unorderedList = (props) => {
  const keyObjectArr = [];
  for (let key in props.formValues) {
    keyObjectArr.push(key);
  }

  return (
    <ul className={classes.NoneStyle}>
      {keyObjectArr.map((key, index) => {
        return (
          <Fragment key={props.formValues[key].placeholder}>
            <ListElement
              bolded={true}
              value={props.formValues[key].name + ":"}
            />
            <ListElement value={props.formValues[key].value} />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default unorderedList;
