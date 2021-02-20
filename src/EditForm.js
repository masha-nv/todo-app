import React, { useContext } from "react";
import Input from "@material-ui/core/Input";
import useForm from "./hooks/useForm";
import { DispatchContext } from "./contexts/TodoContext";

const EditForm = ({ todo }) => {
  const { input, handleChangeInput } = useForm(todo.task);
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", theTodo: { task: input, id: todo.id } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input fullWidth value={input} onChange={handleChangeInput} />
    </form>
  );
};

export default EditForm;
