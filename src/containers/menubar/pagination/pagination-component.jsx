import React from "react";
import { connect } from "react-redux";
import { selectPageNumber } from "../../../redux/pagination/pageSelectors";
import { selectLastPage } from "../../../redux/recipe/recipeSelector";

import {
  increasePageNo,
  decreasePageNo,
} from "../../../redux/pagination/pageActions";

const Pagination = ({ page, addPage, subPage, endPage }) => {
  return (
    <div className="pagination">
      {page === 1 ? (
        ""
      ) : (
        <button
          className="btn--inline pagination__btn--prev"
          onClick={() => subPage()}
        >
          <svg className="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
          </svg>
          <span>Page {page - 1}</span>
        </button>
      )}

      {page === endPage ? (
        ""
      ) : (
        <button
          className="btn--inline pagination__btn--next"
          onClick={() => addPage(endPage)}
        >
          <span>Page {page + 1}</span>
          <svg className="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: selectPageNumber(state),
  endPage: selectLastPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  addPage: (endPage) => dispatch(increasePageNo(endPage)),
  subPage: () => dispatch(decreasePageNo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
