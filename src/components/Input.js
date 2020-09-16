import React, { useState } from "react";

const Input = ({ submitTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setText(val);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => submitTodos(text)}>ADD</button>
    </div>
  );
};

export default Input;
