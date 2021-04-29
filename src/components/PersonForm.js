import React from "react";

const PersonForm = (props) => {
  const {
    newName,
    setNewName,
    newNumber,
    persons,
    setPersons,
    handleInput,
    handleNumber,
    setNewNumber,
  } = props;

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added`);
      setNewName("");
    } else {
      console.log(persons);
      console.log(newName);
      const personObject = {
        name: newName,
        number: newNumber,
      };
      console.log("onnistu");
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleInput} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
