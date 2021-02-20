export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((el) => el.id !== action.id);
    case "TOGGOLE_EDIT_STATE": {
      console.log(
        state.map((el) => (el.id === action.id ? (el.isEditing = true) : el))
      );
    }
    case "MARK_COMPLETE":
      const todo = state.find((el) => el.id === action.id);
      todo.completed = !todo.completed;
      return [...state];
    case "UPDATE_TODO":
      const todoToUpdate = state.find((el) => el.id === action.theTodo.id);
      todoToUpdate.task = action.theTodo.task;
      todoToUpdate.isEditing = false;
      todoToUpdate.completed = false;
      return [...state];

    default:
      return state;
  }
};
