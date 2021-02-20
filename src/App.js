import React from "react";
import TodoApp from "./TodoApp";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  );
}

export default App;
