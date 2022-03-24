import React from "react";
import "./Story.css";

function Story({ inputs, restart }) {
  return (
    <div className="Story">
      <p>
        There was a {inputs.color} {inputs.noun} who loved a {inputs.adjective}{" "}
        {inputs.noun2}.
      </p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Story;
