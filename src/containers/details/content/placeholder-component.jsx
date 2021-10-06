import React from "react";

const Placeholder = () => {
  return (
    <div className="recipe">
      <div className="message">
        <div>
          <svg>
            <use href="img/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    </div>
  );
};

export default Placeholder;
