import React from "react";
import "../assets/css/input.scss";

const Input = ({ value, handleChangeValue, placeholder }) => {
  return (
    <input
      className="add-todo-input"
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
    />
  );
};

export default Input;
