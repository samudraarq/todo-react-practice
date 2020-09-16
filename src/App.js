import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        text: "this is a todo",
        date: new Date(),
        completed: false,
        id: 1,
      },
      {
        text: "this is another todo",
        date: new Date(),
        completed: false,
        id: 2,
      },
    ],
  };

  submitTodos = (text) => {
    this.setState((state) => {
      return {
        todos: [
          ...state.todos,
          { text, date: new Date(), completed: false, id: Math.random() },
        ],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input submitTodos={this.submitTodos} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
