import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "../../Components/Header/Form";
import RecipeCard from "./RecipeCard";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeals] = useState("");

  const API_KEY = "a159b546e5e361d3f8f4492e3953c5c4";
  const query = "pizza";
  const mealType = "Dinner";
  const apiId = "ccb1e971";

  useEffect(() => {
    async function getAPI() {
      try {
        const res = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${API_KEY}&mealType=${mealType}`
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAPI();
  }, []);

  function setSetter(mealType, mealSearch) {
    console.log("Inside setSetter");
    setSearch(mealSearch);
    setMeals(mealType);
  }
  console.log("search state" + search);
  console.log("meal state" + meal);

  return (
    <div className="home">
      <main className="py-5 d-flex justify-content-center flex-column align-items-center gap-2">
        <Navbar />
        <Form setSetter={setSetter} />
        <RecipeCard />
      </main>
    </div>
  );
};

export default Home;
