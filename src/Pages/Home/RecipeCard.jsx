import React from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const navigate = useNavigate();
  return (
    <div className="container d-flex flex-wrap justify-content-center my-2">
      {recipe?.map(({ recipe }, index) => {
        return (
          <div
            key={index}
            className="card p-2 m-2 flex-shrink-0"
            style={{ minWidth: "250px" }}
          >
            <h5 className="title">{recipe?.label}</h5>
            <img className="image" src={recipe?.image} alt="" />
            <button
              className="btn btn-primary"
              onClick={() => navigate("details", { state: recipe })}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;
