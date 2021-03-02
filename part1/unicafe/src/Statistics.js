import React, { useState } from "react";

import "./";

const Statistics = ({ text, value }) => {
  return (
    <>
      <th>{text}</th>
      <th>
        {value} {text === "positive" ? "%" : ""}
      </th>
    </>
  );
};
export default Statistics;
