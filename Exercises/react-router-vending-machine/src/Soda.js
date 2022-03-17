import React from "react";
import { Link } from "react-router-dom";
import soda from "./images/soda.jpeg";

function Soda() {
  return (
    <div>
      <h1>Vending out Soda!</h1>
      <img src={soda} alt="Soda" />
      <button>
        <Link exact to="/">
          Back
        </Link>
      </button>
    </div>
  );
}

export default Soda;
