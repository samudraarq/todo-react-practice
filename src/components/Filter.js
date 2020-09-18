import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filterTodo }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="filterTodo">Filter Todo</label>
      <select
        name="filterTodo"
        id="filterTodo"
        onChange={(e) => filterTodo(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notcomplete">Not Complete</option>
      </select>
    </div>
  );
};

export default Filter;
