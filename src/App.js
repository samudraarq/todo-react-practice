import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Input from "./components/Input";
import Sort from "./components/Sort";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [],
    filterStatus: "all",
    filteredTodos: [],
    sortStatus: "default",
    sortedTodos: [],
  };

  componentDidMount() {
    this.getStorage();
    this.sortTodo();
    this.filterTodo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortStatus !== this.state.sortStatus ||
      prevState.filterStatus !== this.state.filterStatus ||
      prevState.todos !== this.state.todos
    ) {
      this.setStorage();
      this.sortTodo();
      this.filterTodo();
    }
  }

  submitTodos = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          date: new Date(),
          completed: false,
          id: Math.random(),
          isEditing: false,
        },
      ],
    });
  };

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  editTodo = (id) => {
    const newTodos = [...this.state.todos];
    const editedTodo = newTodos.find((todo) => todo.id === id);
    editedTodo.isEditing = !editedTodo.isEditing;
    this.setState({
      todos: newTodos,
    });
  };

  doneEdit = (id, text) => {
    const newTodos = [...this.state.todos];
    const editedTodo = newTodos.find((todo) => todo.id === id);
    editedTodo.isEditing = !editedTodo.isEditing;
    editedTodo.text = text;
    this.setState({
      todos: newTodos,
    });
  };

  completeTodo = (id) => {
    const newTodos = [...this.state.todos];
    const editedTodo = newTodos.find((todo) => todo.id === id);
    editedTodo.completed = !editedTodo.completed;
    this.setState({
      todos: newTodos,
    });
  };

  setStatusFilter = (val) => {
    this.setState({ filterStatus: val });
  };

  filterTodo = () => {
    if (this.state.filterStatus === "completed") {
      this.setState((state) => ({
        filteredTodos: state.sortedTodos.filter(
          (todo) => todo.completed === true
        ),
      }));
    } else if (this.state.filterStatus === "notcomplete") {
      this.setState((state) => ({
        filteredTodos: state.sortedTodos.filter(
          (todo) => todo.completed === false
        ),
      }));
    } else {
      this.setState((state) => ({ filteredTodos: state.sortedTodos }));
    }
  };

  setSortStatus = (val) => {
    this.setState({ sortStatus: val });
  };

  sortTodo = () => {
    if (this.state.sortStatus === "az") {
      const compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const textA = a.text.toUpperCase();
        const textB = b.text.toUpperCase();

        let comparison = 0;
        if (textA > textB) {
          comparison = 1;
        } else if (textA < textB) {
          comparison = -1;
        }
        return comparison;
      };
      const newTodos = [...this.state.todos];
      newTodos.sort(compare);
      this.setState({ sortedTodos: newTodos });
    } else if (this.state.sortStatus === "za") {
      const compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const textA = a.text.toUpperCase();
        const textB = b.text.toUpperCase();

        let comparison = 0;
        if (textA > textB) {
          comparison = 1;
        } else if (textA < textB) {
          comparison = -1;
        }
        return comparison * -1;
      };
      const newTodos = [...this.state.todos];
      newTodos.sort(compare);
      this.setState({ sortedTodos: newTodos });
    } else {
      this.setState({ sortedTodos: this.state.todos });
    }
  };

  getStorage = () => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    if (!localTodos) {
      localTodos = [
        {
          text: "this is a todo",
          date: new Date(),
          completed: false,
          id: 1,
          isEditing: false,
        },
        {
          text: "this is another todo",
          date: new Date(),
          completed: false,
          id: 2,
          isEditing: false,
        },
      ];
    }
    this.setState({ todos: localTodos });
  };

  setStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Input submitTodos={this.submitTodos} />
        <Filter filterTodo={this.setStatusFilter} />
        <Sort sortTodo={this.setSortStatus} />
        <Todos
          todos={this.state.filteredTodos}
          remove={this.removeTodo}
          edit={this.editTodo}
          done={this.doneEdit}
          complete={this.completeTodo}
        />
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
