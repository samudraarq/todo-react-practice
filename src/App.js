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
    apamisalnya: false,
  };

  submitTodos = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { text, date: new Date(), completed: false, id: Math.random() },
      ],
    });
  };

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input submitTodos={this.submitTodos} />
        <Todos todos={this.state.todos} remove={this.removeTodo} />
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       text: "this is a todo",
//       date: new Date(),
//       completed: false,
//       id: 1,
//     },
//     {
//       text: "this is another todo",
//       date: new Date(),
//       completed: false,
//       id: 2,
//     },
//   ]);

//   const submitTodos = (text) => {
//     setTodos([
//       ...todos,
//       {
//         text,
//         date: new Date(),
//         completed: false,
//         id: Math.random(),
//       },
//     ]);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Input submitTodos={submitTodos} />
//       <Todos todos={todos} />
//     </div>
//   );
// };

// export default App;
