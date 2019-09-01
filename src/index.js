import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import App from "./App";

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';

render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/" component={NotFound}/>
      </Switch>
    </App>
    
  </Router>,
  document.getElementById("root")
);
