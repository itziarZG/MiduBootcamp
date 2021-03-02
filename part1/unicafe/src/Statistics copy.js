import React, { useState } from "react";

import "./";

const Statistics = ({ good, neutral, bad }) => {
  const av = (bad * -1 + good) / (bad + neutral + good);
  const percent = (good / (bad + neutral + good)) * 100;
  return (
    <>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>All: {bad + neutral + good}</p>
      <p>Average: {av}</p>
      <p>Percent of Positive: {percent} %</p>
    </>
  );
};
export default Statistics;
