import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Chocolate from "./Chocolate";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/chocolate">
            <Chocolate />
          </Route>
          <Route path="/chips">
            <Chips />
          </Route>
          <Route path="/soda">
            <Soda />
          </Route>
          <Route exact path="/">
            <VendingMachine />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
