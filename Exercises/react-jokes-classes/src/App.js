import { React, Component } from "react";
import JokeList from "./JokeList";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;
