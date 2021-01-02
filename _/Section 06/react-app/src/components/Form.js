import React from "react";
import axios from "axios";

const API_URL = "https://api.github.com/users";

class Form extends React.Component {
  state = {
    searchTerm: "",
    API_URL: "",
    error: ""
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value.trim(),
      API_URL: `${API_URL}/${event.target.value}`
    });
    console.log(this.state);
  };

  handleClear = () => {
    this.props.clearCards();
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(this.state.API_URL)
      .then(({ data }) => this.props.addCard(data))
      .catch(err => this.formatError(err));
    event.currentTarget.reset();
  };

  formatError = err => {
    console.error(err);
    this.setState({ error: "No user found" });
    setTimeout(() => this.setState({ error: "" }), 5000);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Find Github Users</h2>
        <label htmlFor="search">Type Username</label>
        <input type="text" name="search" onChange={this.handleChange} />
        <div>
          <button
            disabled={!this.state.searchTerm}
            type="submit"
            className="button-primary"
          >
            Submit
          </button>
          <button onClick={this.handleClear} type="button">
            Clear
          </button>
        </div>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </form>
    );
  }
}

export default Form;
