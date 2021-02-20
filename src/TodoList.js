import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { TodoContext } from "./contexts/TodoContext";
import EditForm from "./EditForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useContext(TodoContext);
  return (
    <Paper>
      {todos.map((t) =>
        !t.isEditing ? (
          <TodoItem key={t.id} t={t} />
        ) : (
          <EditForm key={t.id} todo={t} />
        )
      )}
    </Paper>
  );
};

export default TodoList;
