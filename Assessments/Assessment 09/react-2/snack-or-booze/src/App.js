import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

import MenuContext from "./MenuContext";
import FullMenu from "./FullMenu";
import MenuItem from "./MenuItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState({});

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setItems({ snacks, drinks });
      setIsLoading(false);
    }
    getItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const addItem = async (type, item) =>
    type === "drinks"
      ? await SnackOrBoozeApi.addDrink(item)
      : await SnackOrBoozeApi.addSnack(item);

  return (
    <MenuContext.Provider value={{ items, setItems }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                {/* <Home snacks={snacks} drinks={drinks} /> */}
                <Home items={items} />
              </Route>

              {/* FOOD MENU BELOW */}

              <Route exact path="/snacks">
                {/* <FoodMenu snacks={snacks} title='Snacks' /> */}
                <FullMenu
                  items={items.snacks}
                  type="snacks"
                  title="Snacks"
                  addItem={addItem}
                />
              </Route>

              <Route path="/snacks/:id">
                <MenuItem items={items.snacks} cantFind="/snacks" />
              </Route>

              {/* DRINK MENU BELOW */}

              <Route exact path="/drinks">
                {/* <DrinkMenu drinks={drinks} title='Drinks' /> */}
                <FullMenu
                  items={items.drinks}
                  type="drinks"
                  title="Drinks"
                  addItem={addItem}
                />
              </Route>

              <Route path="/drinks/:id">
                <MenuItem items={items.drinks} cantFind="/drinks" />
              </Route>

              <Route>
                <p>Hmmm. I can't seem to find what you want.</p>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
