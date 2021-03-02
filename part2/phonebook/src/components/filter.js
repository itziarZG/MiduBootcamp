import React, { useState } from "react";

const Filter = (props) => {
  const [word, setWord] = useState("");

  const handleSearch = (ev) => {
    setWord(ev.target.value);
    props.handleSearch(ev.target.value);
  };

  return (
    <div>
      name:{" "}
      <input onChange={handleSearch} type="text" name="filter" value={word} />
    </div>
  );
};
export default Filter;
