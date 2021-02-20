import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "./../reducers/todoReducer";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
