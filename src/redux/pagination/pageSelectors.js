import { createSelector } from "reselect";

export const selectPageData = (state) => state.pageData;

export const selectPageNumber = createSelector(
  [selectPageData],
  (pageData) => pageData.page
);
