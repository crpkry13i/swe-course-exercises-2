import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import Color from "./Color";

function Routes() {
  const INITIAL_COLORS = {
    red: "#eb3d34",
    orange: "#eba234",
    green: "#34eb52",
  };

  const [colors, setColors] = useState(INITIAL_COLORS);

  const handleAddColor = (clr) => setColors((color) => ({ ...color, ...clr }));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <AddColorForm addColor={handleAddColor} />
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
