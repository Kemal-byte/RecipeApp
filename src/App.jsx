import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="background">
        <article className="main-container">
          <Login />
        </article>
      </div>
    </div>
  );
}

export default App;
