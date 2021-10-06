import React from "react";
import Results from "./List/results-component";
import "./menubar-styles.scss";

const MenuBar = () => {
  return (
    <div className="search-results">
      <Results />
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

export default MenuBar;
