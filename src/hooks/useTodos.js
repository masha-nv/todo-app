import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    toggleEditState: (id) => {
      const updatedTodos = todos.map((t) =>
        t.id === id ? { ...t, isEditing: true } : t
      );
      setTodos(updatedTodos);
    },
    handleAddTodo: (todo) => setTodos([...todos, todo]),
    deleteTodo: (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    handleMarkComplete: (e, id) => {
      const copyTodos = [...todos];
      const todo = copyTodos.find((t) => t.id === id);
      todo.completed = e.target.checked ? true : false;

      setTodos(copyTodos);
    },
    handleUpdateTodo: (id, task) => {
      const copy = [...todos];
      const todo = copy.find((todo) => todo.id === id);
      todo.task = task;
      todo.isEditing = false;
      setTodos(copy);
    },
  };
};
