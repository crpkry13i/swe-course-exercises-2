import React from "react";
import { Link } from "react-router-dom";
import vendingMachine from "./images/vendingMachine.jpg";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <div className="row">
        <img src={vendingMachine} alt="Vending Machine" />
      </div>
      <div className="col">
        <p>
          <Link to="/chocolate">Chocolate</Link>
        </p>
        <p>
          <Link to="/chips">Chips</Link>
        </p>
        <p>
          <Link to="/soda">Soda</Link>
        </p>
      </div>
    </div>
  );
};

export default VendingMachine;
