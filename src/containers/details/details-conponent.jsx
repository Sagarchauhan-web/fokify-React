import React from "react";
import "./details-styles.scss";
import Placeholder from "./content/placeholder-component";
import Content from "./content/content-component";
import { Switch, Route } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/:id" component={Content} />
      </Switch>
    </div>
  );
};

export default Details;
