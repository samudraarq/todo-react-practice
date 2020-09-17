import React from "react";

const Todos = ({ todos, remove }) => {
  const listTodos = todos.map((todo) => (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => remove(todo.id)}>remove</button>
    </li>
  ));
  return <div>{listTodos}</div>;
};

export default Todos;
