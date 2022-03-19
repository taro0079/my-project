import React from "react";
import StarRating from "../StarRating";
import Recipe from "./Recipe";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
      <div>
        <StarRating />
      </div>
    </article>
  );
}
export default Menu;
