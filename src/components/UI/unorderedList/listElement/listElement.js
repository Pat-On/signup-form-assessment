import React from "react";

import classes from "./listElement.module.css";

const listElement = (props) => {
  return <li className={classes.liConfElement}>{props.value}</li>;
};

export default listElement;
