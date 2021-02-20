import React, { Component } from "react";

class FormClass extends Component {
  state = { email: "" };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  render() {
    return (
      <form>
        <h1>Your email is {this.state.email}</h1>
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default FormClass;
