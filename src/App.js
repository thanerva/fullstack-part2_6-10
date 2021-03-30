import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newPerson, setNewPerson] = useState();
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

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

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added`);
    } else {
      console.log(persons);
      console.log(newName);
      const personObject = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={searchValue} onChange={handleFilter} />
      </div>
      <div>
        <h2>Add person</h2>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handleInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredSearch.map((person) => (
        <h3 key={person.name}>
          {person.name} {person.number}
        </h3>
      ))}
    </div>
  );
};

export default App;
