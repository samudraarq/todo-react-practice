import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, remove, edit, done, complete }) => {
  const listTodos = todos.map((todo) => (
    <Todo
      key={todo.id}
      todo={todo}
      remove={remove}
      edit={edit}
      done={done}
      complete={complete}
    />
  ));

  return <div>{listTodos}</div>;
};

export default Todos;
