import React from "react";

const Todos = ({ todos }) => {
  const listTodos = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
  return <div>{listTodos}</div>;
};

export default Todos;
