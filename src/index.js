import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Education from "./Education";
import Career from "./Career";
import Skills from "./Skills";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/career" component={Career} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
