import React, { useState, useEffect } from "react";
import Filter from "./components/filter";
import Form from "./components/form";
import List from "./components/list";
import axiosServ from "./services/axios";

import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [updateData, setUpdateData] = useState(false);
  //Initial Data
  // useEffect(() => {
  //   //fetch to localhost:3001
  //   axiosServ.getPhones().then((response) => {
  //     console.log("here", response);
  //     setPersons(response);
  //   });
  // }, []);

  //update
  useEffect(() => {
    //fetch to localhost:3001
    axiosServ.getPhones().then((response) => {
      console.log("h", response);
      setPersons(response);
    });
  }, [updateData]);

  const handleClick = (newPerson) => {
    const findit = persons.find(
      (pers) => pers.name.toLowerCase() === newPerson.name.toLowerCase()
    );
    if (findit) alert(`${newPerson.name} is already added to phonebook`);
    else {
      axiosServ
        .addItem(newPerson)
        .then((response) => {
          setUpdateData((prev) => !prev);
          setErrorMessage({
            mess: `${newPerson.name} has already added to server`,
            color: "green",
          });
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((err) => {
          setErrorMessage({
            mess: err.errorMessage,
            color: "red",
          });
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        });
    }
  };

  const handleSearch = (word) => {
    setFilterWord(word);
  };
  const filteredList = persons.filter((pers) =>
    pers.name.toLowerCase().includes(filterWord.toLowerCase())
  );
  const handleDelete = (id) => {
    axiosServ
      .deleteItem(id)
      .then((resp) => {
        setUpdateData((prev) => !prev);
        setErrorMessage({
          mess: `Phone was already removed from server`,
          color: "red",
        });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      })
      .catch((err) => {
        setErrorMessage({
          mess: err.errorMessage,
          color: "red",
        });
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      });
  };

  return (
    <div className="home">
      <h1>Phonebook</h1>
      {errorMessage != null ? (
        <div className={`error error_${errorMessage.color}`}>
          {errorMessage.mess}
        </div>
      ) : (
        <></>
      )}
      <Filter handleSearch={handleSearch} />
      <h2>Add new One</h2>
      <Form handleClick={handleClick} />
      <h2>Numbers</h2>
      <ul>
        <List handleDelete={handleDelete} persons={filteredList} />
      </ul>
    </div>
  );
};

export default App;
