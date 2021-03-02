import React from "react";

const List = (props) => {
  return (
    <>
      {props.persons.map((pers) => (
        <p key={pers.name}>
          <span>{pers.name}</span>
          {": "}
          {pers.phone}
        </p>
      ))}
    </>
  );
};
export default List;
