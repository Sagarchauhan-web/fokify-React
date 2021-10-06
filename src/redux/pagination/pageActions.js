import { pageActionTypes } from "./pageActionTypes";

export const increasePageNo = (endPage) => ({
  type: pageActionTypes.INCREASE_PAGE_NO,
  payload: endPage,
});

export const decreasePageNo = () => ({
  type: pageActionTypes.DECREASE_PAGE_NO,
});

export const pageReset = () => ({
  type: pageActionTypes.PAGE_RESET,
});
