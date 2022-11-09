import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "../../Components/Header/Form";
import RecipeCard from "./RecipeCard";
import "./Home.css";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeals] = useState("");
  // const [products, setProducts] = useState({});

  // APi key and ID for the recipe's
  const API_KEY = "a159b546e5e361d3f8f4492e3953c5c4";
  const apiId = "ccb1e971";

  const navigate = useNavigate();

  useEffect(() => {
    async function getAPI() {
      try {
        const res = await fetch(
          `https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${API_KEY}&mealType=${meal}`
        );
        const data = await res.json();
        console.log("Should display the return value from the API");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (search && meal) {
      console.log("Get API called");
      getAPI();
    }
  }, [search]);

  function setSetter(mealSearch, mealType) {
    e.preventDefault();
    console.log("Inside setSetter");
    setSearch(mealSearch);
    setMeals(mealType);
    navigate("home");
  }
  console.log("search state " + search);
  console.log("meal state " + meal);

  return (
    <div className="home">
      <main className="py-5 d-flex justify-content-center flex-column align-items-center gap-2">
        <Form setSetter={() => setSetter} />
        <RecipeCard />
      </main>
    </div>
  );
};

export default Home;
