import ActionTypes from "./recipeActionTypes";

export const storeRecipes = (data) => ({
  type: ActionTypes.GET_RECIPES,
  payload: data,
});

export const storeRecipe = (data) => ({
  type: ActionTypes.GET_RECIPE,
  payload: data,
});
