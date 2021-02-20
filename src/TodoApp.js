import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import TodoList from "./TodoList";
import List from "@material-ui/core/List";
import TodoForm from "./TodoForm";

const styles = {
  root: {
    height: "100vh",
    padding: 0,
    margin: 0,
    "& .MuiAppBar-colorPrimary": {
      height: "64px",
    },
  },
};

const TodoApp = ({ classes }) => {
  return (
    <Paper className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography>Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <List>
            <TodoList />
          </List>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(TodoApp);
