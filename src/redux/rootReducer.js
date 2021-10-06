import { combineReducers } from "redux";

import recipeReducer from "./recipe/recipeReducer";
import pageReducer from "./pagination/pageReducer";

const rootReducer = combineReducers({
  recipes: recipeReducer,
  pageData: pageReducer,
});

export default rootReducer;
