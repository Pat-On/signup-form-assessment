import React from "react";

import classes from "./listElement.module.css";

const listElement = (props) => {
  const classList = [classes.liConfElement];
  if (props.bolded) classList.push(classes.bolded);
  return <li className={classList.join(" ")}>{props.value}</li>;
};

export default listElement;
