import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="my-5">
      <div className="container my-5 border foodDetails p-3">
        <h1>{state.label}</h1>
        <h4>{state.mealType}</h4>
        <img src={state.image} alt="" />
        <p>Source: {state.source}</p>
        <div>
          <h4>Ingredients</h4>
          <ul className="flex-column">
            {state.ingredients.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
        </div>
        <h4>Cuisine: {state.cuisineType}</h4>
      </div>
    </div>
  );
};

export default Details;
