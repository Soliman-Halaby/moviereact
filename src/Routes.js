import React from "react";
import { Switch, Route } from "react-router-dom";

import Film from "./component/Pages/Film";
import Home from "./component/Pages/Home";

export default function Router() {
  return (
    <Switch>
      <Route path="/film">
        <Film />
      </Route>
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}
