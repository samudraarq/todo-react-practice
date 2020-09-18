import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ submitTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTodos(text);
    setText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.input}>
      <input type="text" onChange={handleChange} value={text} />
      <button>ADD</button>
    </form>
  );
};

export default Input;
