import React, { useState, useContext } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import { DispatchContext } from "./contexts/TodoContext";

const styles = {
  root: {
    width: "100%",
    marginTop: "20px",
    "& .MuiInputBase-root": {
      width: "100%",
    },
    "& .MuiInputLabel-root": {
      marginLeft: "10px",
    },
  },
};

const TodoForm = ({ classes }) => {
  const dispatch = useContext(DispatchContext);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    dispatch({
      type: "ADD_TODO",
      todo: {
        id: Math.random(),
        task: value,
        completed: false,
        isEditing: false,
      },
    });
  };
  return (
    <Paper>
      <form className={classes.root} onSubmit={handleSubmit}>
        <InputLabel>Enter Your Todo</InputLabel>
        <Input
          style={{ padding: "0 10px" }}
          value={value}
          onChange={handleChange}
          className={classes.inputField}
        />
      </form>
    </Paper>
  );
};

export default withStyles(styles)(TodoForm);
