import React, { useEffect } from "react";
import { useState } from "react";
import FormRecipe from "../../Components/Header/FormRecipe";
import RecipeCard from "./RecipeCard";
import "./Home.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";

const Home = () => {
  const [search, setSearch] = useState("pizza");
  const [meal, setMeals] = useState("dinner");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);

  // APi key and ID for the recipe's
  const API_KEY = "a159b546e5e361d3f8f4492e3953c5c4";
  const apiId = "ccb1e971";

  const navigate = useNavigate();
  const url = `https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${API_KEY}&mealType=${meal}`;

  const getData = async () => {
    console.log("clicked");
    const { data } = await axios(url);
    setRecipe(data.hits);
    console.log(data.hits);
  };
  console.log("Recipe is");
  console.log(recipe);
  return (
    <div className="home">
      <main className="py-5 d-flex justify-content-center flex-column align-items-center gap-2">
        <FormRecipe
          setSearch={setSearch}
          setMeals={setMeals}
          getData={getData}
        />
        <RecipeCard recipe={recipe} />
      </main>
    </div>
  );
};

export default Home;
