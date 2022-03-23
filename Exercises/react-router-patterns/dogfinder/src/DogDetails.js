import React from "react";
import { useParams, Redirect } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div className="DogDetails">
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>{dog.age} years old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
