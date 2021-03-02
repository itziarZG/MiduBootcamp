import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import Form from "./components/form";
import List from "./components/list";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  //Initial Data
  useEffect(() => {
    //fetch to localhost:3001
    axios
      .get("http://localhost:3001/persons")
      //setPersons con data
      .then((response) => setPersons(response.data));
  }, []);

  const handleClick = (newPerson) => {
    const findit = persons.find(
      (pers) => pers.name.toLowerCase() === newPerson.name.toLowerCase()
    );
    if (findit) alert(`${newPerson.name} is already added to phonebook`);
    else setPersons(persons.concat(newPerson));
  };

  const handleSearch = (word) => {
    setFilterWord(word);
  };
  const filteredList = persons.filter((pers) =>
    pers.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>Add new One</h2>
      <Form handleClick={handleClick} />
      <h2>Numbers</h2>
      <List persons={filteredList} />
    </>
  );
};

export default App;
