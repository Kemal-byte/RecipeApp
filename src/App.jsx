import "./App.css";
import Login from "./Pages/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Details from "./Pages/Details/Details";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";
import RecipeCard from "./Pages/Home/RecipeCard";

function App() {
  return (
    <div className="App">
      <div className="background">
        <article className="main-container">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* //Homepage should be under private router */}
            <Route path="/" element={<Home />}>
              <Route path="recipe" element={<RecipeCard />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
            {/* <Route path="/*" element={<Error />} /> */}
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </article>
      </div>
    </div>
  );
}

export default App;
