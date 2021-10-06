import { combineReducers } from "redux";

import recipeReducer from "./recipe/recipeReducer";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

export default rootReducer;
