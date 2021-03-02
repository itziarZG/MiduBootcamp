import React from "react";
import Content from "./Content/Content";
import Total from "./Content/Total";
import Header from "./header/Header";

const Course = (props) => {
  const { name, parts } = props.course;
  // const handle = (ev) => {

  // }
  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};
export default Course;
