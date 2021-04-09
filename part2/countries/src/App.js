import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import List from "./components/list";

import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  //Initial Data
  useEffect(() => {
    //fetch to localhost:3001
    axios
      .get("https://restcountries.eu/rest/v2/all")
      //setCountries con data
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearch = (word) => {
    setFilterWord(word);
  };
  const filteredList = countries.filter((pers) =>
    pers.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <>
      <h2>Find countries</h2>
      <Filter handleSearch={handleSearch} />
      {filterWord === "" ? (
        <></>
      ) : (
        <>
          <h2>Countries</h2>
          <List handleSearch={handleSearch} countries={filteredList} />
        </>
      )}
    </>
  );
};

export default App;
