import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { storeRecipe } from "../../../redux/recipe/recipeAction";
import { selectRecipe } from "../../../redux/recipe/recipeSelector";
import RecipeIngrediant from "./recipeIngrediant";

class Content extends React.Component {
  state = {
    id: undefined,
  };

  async componentDidMount() {
    try {
      this.setState({ id: this.props.match.params.id }, this.getData);
    } catch (err) {
      console.log(err);
    }
  }

  async getData() {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${this.state.id}`
    );
    this.props.storeRecipe(response.data.data.recipe);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.id) {
      return { id: nextProps.match.params.id };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevProps.match.params.id) {
      this.getData();
    }
  }

  render() {
    const { recipe } = this.props;
    // console.log(recipe);
    return (
      <>
        <figure className="recipe__fig">
          <img
            src={recipe.image_url}
            alt="{recipe.title}"
            className="recipe__img"
          />
          <h1 className="recipe__title">
            <span>{recipe.title}</span>
          </h1>
        </figure>

        <div className="recipe__details">
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">
              {recipe.cooking_time}
            </span>
            <span className="recipe__info-text">minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">
              {recipe.servings}
            </span>
            <span className="recipe__info-text">servings</span>

            <div className="recipe__info-buttons">
              <button className="btn--tiny btn--update-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button className="btn--tiny btn--update-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div className="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button className="btn--round btn--bookmark">
            <svg className="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div className="recipe__ingredients">
          <h2 className="heading--2">Recipe ingredients</h2>
          <ul className="recipe__ingredient-list">
            <RecipeIngrediant ingrediants={recipe.ingredients} />
          </ul>
        </div>

        <div className="recipe__directions">
          <h2 className="heading--2">How to cook it</h2>
          <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__publisher"> {recipe.publisher}</span>.
            Please check out directions at their website.
          </p>
          <a
            className="btn--small recipe__btn"
            href={recipe.source_url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Directions</span>
            <svg className="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeRecipe: (data) => dispatch(storeRecipe(data)),
});

const mapStateToProps = (state) => ({
  recipe: selectRecipe(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
