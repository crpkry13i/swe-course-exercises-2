import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      {dogs.map((dog, i) => (
        <Link key={i} to={`/dogs/${dog.name.toLowerCase()}`}>
          <div>
            <img src={dog.src} alt="Dogs" />
            <h3>{dog.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DogList;
