import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import "./Form.css";

const Form = ({ setSetter }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    setInput(e.target.value);
  }

  console.log(input);
  console.log(select);

  // function handleSubmit() {
  //   // e.preventDefault();
  //   props.setSetter(input, select);
  //   console.log("Inside handle submit");
  //   // navigate("/home");
  // }

  return (
    <>
      <div className="spacer"></div>
      <h1>Search for a delicious recipe</h1>
      <form
        action="get"
        method="GET"
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
          <option value="Breakfeast">Breakfeast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
        <button
          className="btn btn-primary search"
          type="submit"
          onSubmit={() => setSetter(input, select)}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Form;
