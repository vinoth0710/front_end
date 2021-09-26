import React, { Component } from "react";
import dash from "./pages/featuredInfo";
import form from "./pages/form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={dash} />
          <Route exact path="/form" component={form} />
        </Switch>
      </Router>
    );
  }
}

export default App;
