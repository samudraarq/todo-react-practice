import React from "react";

const Filter = ({ filterTodo }) => {
  return (
    <>
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
    </>
  );
};

export default Filter;
