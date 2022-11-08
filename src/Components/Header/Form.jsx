import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    setInput(e.target.value);
  }

  console.log(input);
  console.log(select);

  function handleSubmit() {
    props.setSetter(input, select);
    navigate("/home");
  }

  return (
    <>
      <div className="spacer"></div>
      <h1>Search for a delicious recipe</h1>
      <form
        action="get"
        className="d-flex flex-column gap-3 align-items-center recipe--search-bar"
      >
        <input
          type="text"
          placeholder="Type here"
          className="recipe--input"
          value={input}
          onChange={handleInput}
        />
        <select
          className="form-select"
          aria-label="Default select example"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option defaultValue>Open this select menu</option>
          <option value="1">Breakfeast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Snack</option>
          <option value="5">Teatime</option>
        </select>
        <button className="btn btn-primary search" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </>
  );
};

export default Form;
