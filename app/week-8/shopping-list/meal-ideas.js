"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [recipes, setRecipes] = useState([]);

  function cleanString(str) {
    // Regular expression to match most emoji characters
    const emojiRegex =
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{2934}\u{2935}\u{2B05}\u{2B06}\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{FE0F}]/gu;
    // Replace emoji with an empty string
    return str.replace(emojiRegex, "").replace(/,.*/, "").replace(/s$/, "").replace(/s $/, "").trim();
  }

  const ingredientString = cleanString(ingredient);

  async function loadMealIdeas() {
    const loadedMeals = await fetchMealIdeas(ingredientString);
    setRecipes(loadedMeals);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredientString]);

  return (
    <section className="m-12 mt-0 p-2 hover:bg-slate-400 list-disc list-inside bg-slate-600">
      <span className="text-orange-300">
        Here's some recipes that use {ingredientString}:
      </span>
      <ul className="list-disc list-inside">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    </section>
  );
}
