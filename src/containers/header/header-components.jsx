import React from "react";
import Bookmark from "./Bookmarks/bookmark-component";
import "./header-styles.scss";
import { storeRecipes } from "../../redux/recipe/recipeAction";
import { pageReset } from "../../redux/pagination/pageActions";
// import { selectRecipes } from "../../redux/recipe/recipeSelector";
import { connect } from "react-redux";
import axios from "axios";

class Header extends React.Component {
  componenetDidMount() {}

  fetch = async (item) => {
    const { storingSearchList, pageReset } = this.props;
    try {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${item}`
      );
      // console.log(response);
      storingSearchList(response.data.data.recipes);
      pageReset();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <header className="header">
        <img src="img/logo.png" alt="Logo" className="header__logo" />
        <form
          className="search"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(e.target[0].value);
            this.fetch(e.target[0].value);
          }}
        >
          <input
            type="text"
            className="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button className="btn search__btn">
            <svg className="search__icon">
              <use href="img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__btn nav__btn--add-recipe">
                <svg className="nav__icon">
                  <use href="img/icons.svg#icon-edit"></use>
                </svg>
                <span>Add recipe</span>
              </button>
            </li>
            <li className="nav__item">
              <button className="nav__btn nav__btn--bookmarks">
                <svg className="nav__icon">
                  <use href="img/icons.svg#icon-bookmark"></use>
                </svg>
                <span>Bookmarks</span>
              </button>
              <Bookmark />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storingSearchList: (data) => dispatch(storeRecipes(data)),
  pageReset: () => dispatch(pageReset()),
});

// const mapStateToProps = (state) => ({
//   dataCheck: selectRecipes(state),
// });

export default connect(null, mapDispatchToProps)(Header);
