import { createSelector } from "reselect";

const selectUser = (state) => state.recipes;

export const selectRecipes = createSelector(
  [selectUser],
  (recipes) => recipes.recipesData
);

export const selectRecipe = createSelector(
  [selectUser],
  (recipes) => recipes.recipe
);
