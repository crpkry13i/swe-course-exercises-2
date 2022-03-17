import React from "react";
import { Link } from "react-router-dom";
import chocolate from "./images/chocolate.png";

function Chocolate() {
  return (
    <div>
      <h1>Vending out Chocolate!</h1>
      <img src={chocolate} alt="Chocolate" />
      <button>
        <Link exact to="/">
          Back
        </Link>
      </button>
    </div>
  );
}

export default Chocolate;
