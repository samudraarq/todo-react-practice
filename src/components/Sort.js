import React from "react";
import styles from "./Sort.module.css";

const Sort = ({ sortTodo }) => {
  return (
    <div className={styles.sort}>
      <label htmlFor="sortTodo">Sort Todo</label>
      <select
        name="sortTodo"
        id="sortTodo"
        onChange={(e) => sortTodo(e.target.value)}
      >
        <option value="default">default</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
