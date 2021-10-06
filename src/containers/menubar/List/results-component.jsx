import React from "react";
import { connect } from "react-redux";
import { selectRecipesByPage } from "../../../redux/recipe/recipeSelector";
import { Link } from "react-router-dom";

const Results = ({ recipes, page }) => {
  console.log(recipes, page);
  return (
    <ul className="results">
      {recipes.length > 0
        ? recipes.map((recipe) => (
            <li className="preview" key={recipe.id}>
              <Link
                className="preview__link preview__link--active"
                to={`${recipe.id}`}
              >
                <figure className="preview__fig">
                  <img src={recipe.image_url} alt="Test" />
                </figure>
                <div className="preview__data">
                  <h4 className="preview__title">{recipe.title}</h4>
                  <p className="preview__publisher">{recipe.publisher}</p>
                  {/* <div className="preview__user-generated">
                    <svg>
                      <use href="img/icons.svg#icon-user"></use>
                    </svg>
                  </div> */}
                </div>
              </Link>
            </li>
          ))
        : ""}
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipes: selectRecipesByPage(ownProps.page)(state),
});

export default connect(mapStateToProps)(Results);
