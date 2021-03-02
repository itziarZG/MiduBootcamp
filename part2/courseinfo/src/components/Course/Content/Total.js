import React from "react";

const Total = (props) => {
  let total = props.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
};
export default Total;
