import React from "react";
import Results from "./List/results-component";
import "./menubar-styles.scss";
import Pagination from "./pagination/pagination-component";

import { selectPageNumber } from "../../redux/pagination/pageSelectors";
import { selectRecipes } from "../../redux/recipe/recipeSelector";
import { connect } from "react-redux";

const MenuBar = ({ recipes, page }) => {
  // console.log(page);
  return (
    <div className="search-results">
      <Results page={page} />
      {recipes.length > 0 ? <Pagination /> : ""}

      <p className="copyright">
        &copy; Copyright by
        <a
          className="twitter-link"
          target="_blank"
          href="https://twitter.com/jonasschmedtman"
          rel="noreferrer"
        >
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: selectPageNumber(state),
  recipes: selectRecipes(state),
});

export default connect(mapStateToProps)(MenuBar);
