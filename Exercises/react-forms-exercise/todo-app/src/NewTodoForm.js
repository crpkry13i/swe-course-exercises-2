import React, { useState } from "react";
import uuid from "uuid/v1";

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
        />
        <button>Add a todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
