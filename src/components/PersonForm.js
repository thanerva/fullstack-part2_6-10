import React from "react";
import personService from "../service/person";

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
    setErrorMessage,
    setRedError,
  } = props;

  const addPerson = (event) => {
    event.preventDefault();

    let found = false;
    persons.forEach((person) => {
      if (newName === person.name) {
        found = true;
      }
    });

    let personObject = {
      name: newName,
      number: newNumber,
    };

    if (found) {
      const person = persons.find((n) => n.name === newName);
      const id = person.id;
      if (window.confirm(`${newName} already found, update nr?`)) {
        personService
          .update(id, personObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage(`${newName} was already removed from server`);
            setRedError(true);
            setTimeout(() => {
              setErrorMessage(null);
              setRedError(false);
            }, 5000);
          });
        setErrorMessage(`${newName} number updated!`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNewNumber("");
        setNewName("");
      }
      return;
    }
    console.log("onnistu");

    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setErrorMessage(`${personObject.name} created succesfully`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      setNewName("");
      setNewNumber("");
    });
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
