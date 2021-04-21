import React from "react";

//TODO proper CSS and responsive
const input = (props) => {
  return (
    <input
      style={{ display: "block", margin: "auto" }}
      placeholder={props.placeholder}
      onChange={props.formInputHandler}
      value={props.value}
    />
  );
};

export default input;
