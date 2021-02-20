import React, { useEffect } from "react";
import useHandleChange from "./useHandleChange";

const Todo = () => {
  const [todo, handleChange, handleSubmit] = useHandleChange("");
  useEffect(() => {
    if (todo === "buy milk") document.title = "MILK";
  });
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Enter New Todo</label>
        <input
          id="todo"
          type="text"
          placeholder="Todo"
          value={todo}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Todo;
