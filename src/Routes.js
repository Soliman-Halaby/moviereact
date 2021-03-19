import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Pages/Home";
import Film from "./component/Pages/Film";

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
