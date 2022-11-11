import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import RecipeCard from "../Pages/Home/RecipeCard";
import Loging from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [check, setCheck] = useState(false);

  function handleuser(param) {
    if (param) {
      setCheck(param);
    }
  }
  return (
    <>
      <Navbar handleuser={handleuser} />
      <Routes>
        <Route path="/login" element={<Loging handleuser={handleuser} />} />
        <Route path="/" element={<PrivateRouter check={check} />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="/recipe" element={<RecipeCard />} />
        <Route path="/about" element={<About />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
