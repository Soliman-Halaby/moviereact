import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Film from "./component/Pages/Film";
import Home from "./component/Pages/Home";

export default function Router(props) {
  let location = useLocation()
  const movie_id = location.userProps
  const movie_path = "/film/"
  return (
    <Switch>
      <Route path= {movie_path} component= {() => <Film filmId={location.userProps} />} />
      {/* <Route path="/film" component={props.movieName}>
        <Film />
      </Route> */}
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}
