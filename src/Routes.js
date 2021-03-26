import React from "react";
import { Switch, Route } from "react-router-dom";

import Film from "./component/Pages/Film";
import Home from "./component/Pages/Home";

export default function Router(props) {
  return (
    <Switch>
    <Route path="/film" component={() => <Film title={`Props through component`} />} />
      {/* <Route path="/film" component={props.movieName}>
        <Film />
      </Route> */}
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}
