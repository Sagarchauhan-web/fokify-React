import React from "react";

const RecipeIngrediant = ({ ingrediants }) => {
  return (
    <>
      {ingrediants
        ? ingrediants.map((ing) => (
            <li className="recipe__ingredient">
              <svg className="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__quantity">{ing.quantity}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{ing.unit}</span>
                {ing.description}
              </div>
            </li>
          ))
        : ""}
    </>
  );
};

export default RecipeIngrediant;
