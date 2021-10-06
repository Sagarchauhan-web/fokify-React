import ActionTypes from "./recipeActionTypes";

const INITIAL_STATE = {
  recipesData: [],
  recipe: {},
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_RECIPES:
      return {
        ...state,
        recipesData: action.payload,
      };
    case ActionTypes.GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
