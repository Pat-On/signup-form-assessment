import React from "react";

const input = (props) => {
  return (
    <input
      style={{ display: "block", margin: "auto" }}
      placeholder={props.string}
    />
  );
};

export default input;
