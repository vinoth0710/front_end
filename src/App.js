import React, { Component } from "react";
import enrollform from "./pages/enrollform";
import deployform from "./pages/deployform";
import dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={dashboard} />
          <Route exact path="/enrollform" component={enrollform} />
          <Route exact path="/deployform" component={deployform} />
        </Switch>
      </Router>
    );
  }
}

export default App;
