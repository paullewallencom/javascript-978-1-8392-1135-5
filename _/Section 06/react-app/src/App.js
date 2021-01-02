import React, { Component } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import "./App.css";

class App extends Component {
  state = {
    cards: []
  };

  addCard = card => {
    const newCards = [card, ...this.state.cards];
    // prettier-ignore
    this.setState({ cards: newCards },
      () => localStorage.setItem("users", JSON.stringify(newCards))
    );
    console.log(this.state.cards);
  };

  clearCards = () => {
    this.setState({
      cards: []
    });
    localStorage.setItem("users", "");
  };

  componentDidMount() {
    if (localStorage.getItem("users")) {
      this.setState({
        cards: JSON.parse(localStorage.getItem("users"))
      });
    }
  }

  render() {
    return (
      <div>
        <Form addCard={this.addCard} clearCards={this.clearCards} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
