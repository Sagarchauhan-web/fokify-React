import { pageActionTypes } from "./pageActionTypes";
import { addCheck, subCheck } from "./utils";

const INITIAL_STATE = {
  page: 1,
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pageActionTypes.INCREASE_PAGE_NO:
      return {
        ...state,
        page: addCheck(state.page, action.payload),
      };
    case pageActionTypes.DECREASE_PAGE_NO:
      return {
        ...state,
        page: subCheck(state.page),
      };
    case pageActionTypes.PAGE_RESET:
      return {
        ...state,
        page: 1,
      };
    default:
      return state;
  }
};

export default pageReducer;
