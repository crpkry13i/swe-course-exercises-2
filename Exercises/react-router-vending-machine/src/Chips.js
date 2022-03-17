import React from "react";
import { Link } from "react-router-dom";
import chips from "./images/chips.jpg";

function Chips() {
  return (
    <div>
      <h1>Vending out Chips!</h1>
      <img src={chips} alt="Chips" />
      <button>
        <Link exact to="/">
          Back
        </Link>
      </button>
    </div>
  );
}

export default Chips;
