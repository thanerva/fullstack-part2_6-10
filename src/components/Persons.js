import React from "react";

const Persons = ({ filter }) => {
  return (
    <div>
      {filter.map((person) => (
        <h3 key={person.name}>
          {person.name} {person.number}
        </h3>
      ))}
    </div>
  );
};

export default Persons;
