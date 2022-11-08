import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Details from "./Pages/Details/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="background">
        <article className="main-container">
          {/* <Login /> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </article>
      </div>
    </div>
  );
}

export default App;
