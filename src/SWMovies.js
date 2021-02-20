import React, { useState, useEffect, useRef } from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";

const styles = {
  bg: {
    backgroundColor: "beige",
    backgroundBlendMode: "multiply",
    height: "100vh",
    // background: `url(
    //         https://images.unsplash.com/photo-1611407880568-8c6cce659228?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FjdHVzJTIwZmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60
    //     )  center `,
    backgroundSize: "cover",
  },
  root: {
    textAlign: "center",
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& h1": {
      color: "white",
      mixBlendMode: "multiply",
      backgroundColor: "black",
      width: "300px",
      padding: "10px 30px",
    },
  },
  select: {
    padding: "10px",
    border: "none",
    background: "rgba(255,255,255,0.4)",
    "&:focus": {
      color: "#fff",
    },
  },
  option: {
    color: "black",
  },
};

const SWMovies = ({ classes }) => {
  const options = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://swapi.dev/api/films/${number}/`
      );
      setMovie(response.data.title);
    };
    getData();
  }, [number]);
  return (
    <div className={classes.bg}>
      <div className={classes.root}>
        <h1>Pick A Movie</h1>
        <select
          className={classes.select}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        >
          {options.map((option) => (
            <option className={classes.option} key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <h3>{movie}</h3>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default withStyles(styles)(SWMovies);
