import ReactDOM from "react-dom";
import "./index.css";

import React, { useState } from "react";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, addPoint] = useState(
    new Array(anecdotes.length).join("0").split("").map(parseFloat)
  );
  const getSelected = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };
  const getVote = () => {
    // console.log("has votado", selected);
    // console.log(points);
    const copy = [...points];
    // increment the value in position 2 by one
    copy[selected] += 1;
    addPoint(copy);
  };
  const mostValue = Math.max(...points);
  console.log("most", mostValue);
  const most = points.findIndex((value) => value === mostValue);
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <button onClick={getVote}>vote!</button>
      <button onClick={getSelected}>next anecdote</button>
      <br></br>
      {isNaN(mostValue) ? (
        ""
      ) : (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>
            '{props.anecdotes[most]}' has {points[most]} votes.
          </p>
        </div>
      )}
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
