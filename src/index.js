import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/Homepage/HomePage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={HomePage} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
