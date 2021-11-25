import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import FormCard from "./component/FormCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/formulaire" component={FormCard} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
