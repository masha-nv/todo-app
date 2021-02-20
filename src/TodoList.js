import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";
import EditForm from "./EditForm";
import { TodoContext } from "./contexts/TodoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <Paper>
      {todos.map((t) =>
        !t.isEditing ? (
          <React.Fragment key={t.id}>
            <ListItem
              key={t.id}
              style={{
                textDecoration: `${t.completed ? "line-through" : "none"}`,
              }}
            >
              <Checkbox
                checked={t.completed}
                onChange={() => dispatch({ type: "MARK_COMPLETE", id: t.id })}
              />
              <ListItemText primary={t.task} />
              <IconButton
                onClick={() => dispatch({ type: "DELETE_TODO", id: t.id })}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() =>
                  dispatch({ type: "TOGGOLE_EDIT_STATE", id: t.id })
                }
              >
                <EditIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ) : (
          <EditForm key={t.id} todo={t} />
        )
      )}
    </Paper>
  );
};

export default TodoList;
