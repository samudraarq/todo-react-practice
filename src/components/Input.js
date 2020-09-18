import React, { useState } from "react";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={handleChange} value={text} />
      <button>ADD</button>
    </form>
  );
};

export default Input;
