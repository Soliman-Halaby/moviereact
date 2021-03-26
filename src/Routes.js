import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Film from "./component/Pages/Film";
import Home from "./component/Pages/Home";

export default function Router(props) {
  let location = useLocation();
  const movie_path = "/film/:id";
  // Create different Route depending on the path
  return (
    <Switch>
      <Route path={movie_path} component={Film} exact={true} />
      <Route path="/" exact={true} component={Home}></Route>
    </Switch>
  );
}
