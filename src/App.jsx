import "./App.css";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <div className="App">
      <div className="opacity-img"></div>
      <div className="background">
        <article className="main-container">
          <AppRouter />
        </article>
      </div>
    </div>
  );
}

export default App;
