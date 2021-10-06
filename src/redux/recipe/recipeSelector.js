import { createSelector } from "reselect";

const selectUser = (state) => state.recipes;

export const selectRecipes = createSelector(
  [selectUser],
  (recipes) => recipes.recipesData
);

export const selectRecipesByPage = (page) =>
  createSelector([selectRecipes], (recipesData) => {
    const start = (page - 1) * 10;
    const end = page * 10;
    console.log(page);
    return recipesData.slice(start, end);
  });

export const selectLastPage = createSelector([selectRecipes], (recipesData) => {
  return Math.ceil(recipesData.length / 10);
});

export const selectRecipe = createSelector(
  [selectUser],
  (recipes) => recipes.recipe
);
