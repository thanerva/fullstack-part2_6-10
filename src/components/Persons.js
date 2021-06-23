import React from "react";
import personService from "../service/person";

const Persons = ({ persons, setPersons, setErrorMessage }) => {
  const deleteButton = (person) => {
    console.log(person);
    const id = person.id;

    if (window.confirm(`Do you want to delete ${person.name}?`))
      personService.deletePerson(id).then((returnedPerson) => {
        setPersons(persons.filter((person) => person.id !== id));
        setErrorMessage(`${person.name} was deleted succesfully!`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  return (
    <div>
      {persons.map((person) => (
        <h3 key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteButton(person)}>delete</button>
        </h3>
      ))}
    </div>
  );
};

export default Persons;
