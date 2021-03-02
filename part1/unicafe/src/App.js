import React, { useState } from "react";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const av = (bad * -1 + good) / (bad + neutral + good);
  const percent = (good / (bad + neutral + good)) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        Bad
      </button>
      {good | neutral | (bad !== 0) ? (
        <>
          <h3>Statistics</h3>
          <table>
            <tr>
              <Statistics text="good" value={good} />
            </tr>
            <tr>
              <Statistics text="neutral" value={neutral} />
            </tr>
            <tr>
              <Statistics text="bad" value={bad} />
            </tr>
            <tr>
              <Statistics text="all" value={good + bad + neutral} />
            </tr>
            <tr>
              <Statistics text="average" value={av} />
            </tr>
            <tr>
              <Statistics text="positive" value={percent} />
            </tr>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
