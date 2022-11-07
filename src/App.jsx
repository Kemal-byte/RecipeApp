import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Loging from "./Pages/Loging/Loging";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="background">
        <article className="main-container">
          <Loging />
        </article>
      </div>
    </div>
  );
}

export default App;