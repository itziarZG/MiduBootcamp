import React from "react";
import Part from "./Part";

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((part) => (
        <Part name={part.name} exerc={part.exercises} />
      ))}
    </div>
  );
};
export default Content;
