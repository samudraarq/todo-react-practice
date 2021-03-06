import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, remove, edit, done, complete }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(todo.text);
  }, [todo]);

  const listTodos = todo.isEditing ? (
    <li className={styles.todo}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => edit(todo.id)}>cancel</button>
      <button onClick={() => done(todo.id, text)}>done</button>
    </li>
  ) : (
    <li className={`${styles.todo} ${todo.completed && styles.completed}`}>
      {todo.text}
      <button onClick={() => remove(todo.id)}>remove</button>
      <button onClick={() => edit(todo.id)}>edit</button>
      {todo.completed ? (
        <button onClick={() => complete(todo.id)}>not complete</button>
      ) : (
        <button onClick={() => complete(todo.id)}>complete</button>
      )}
    </li>
  );

  return listTodos;
};

export default Todo;
