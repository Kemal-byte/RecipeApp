import "./App.css";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Details from "./Pages/Details/Details";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="background">
        <article className="main-container">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* //Homepage should be under private router */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </article>
      </div>
    </div>
  );
}

export default App;
