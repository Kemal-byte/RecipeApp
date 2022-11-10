import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormRecipe = ({ setSearch, setMeals, getData }) => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  return (
    <div className="mt-5">
      <div className="form">
        <input
          type="text"
          placeholder="Write something"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="foods"
          id="cars"
          onChange={(e) => setMeals(e.target.value)}
          className="w-100"
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </select>
        <button className="btn btn-primary w-100" onClick={getData}>
          aloha
        </button>
      </div>
    </div>
  );
};

export default FormRecipe;
