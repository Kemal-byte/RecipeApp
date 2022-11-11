import React from "react";

const FormRecipe = ({ setSearch, setMeals, getData }) => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  return (
    <div className="mt-5 w-25" style={{ minWidth: "250px" }}>
      <div className="form w-100">
        <input
          className="w-100 px-2 py-1"
          type="text"
          required
          placeholder="Write something"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="foods"
          id="cars"
          onChange={(e) => setMeals(e.target.value)}
          className="w-100 px-2 py-1"
        >
          {mealType.map((meal, index) => {
            return (
              <option key={index} value={meal}>
                {meal}
              </option>
            );
          })}
        </select>
        <button className="btn btn-primary w-100" onClick={getData}>
          Search for a recipe
        </button>
      </div>
    </div>
  );
};

export default FormRecipe;
