import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./service/person";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [redError, setRedError] = useState(false);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
    /* axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log("toimii"); */
  }, []);

  const filteredSearch = persons.filter((entry) =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleFilter = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} redError={redError} />
      <Filter searchValue={searchValue} handleFilter={handleFilter} />
      <div>
        <h2>Add person</h2>
      </div>
      <PersonForm
        newName={newName}
        setNewNumber={setNewNumber}
        setNewName={setNewName}
        newNumber={newNumber}
        handleInput={handleInput}
        handleNumber={handleNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setRedError={setRedError}
      />
      <h2>Numbers</h2>
      <Persons
        persons={filteredSearch}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default App;
