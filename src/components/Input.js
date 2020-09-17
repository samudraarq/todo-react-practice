import React, { useState } from "react";

const Input = ({ submitTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
  };

  const handleSubmit = () => {
    submitTodos(text);
    setText("");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleSubmit}>ADD</button>
    </div>
  );
};

export default Input;
