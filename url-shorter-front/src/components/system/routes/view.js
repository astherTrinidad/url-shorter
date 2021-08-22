import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Redirect from "../../pages/redirect";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/:key" component={Redirect} />
      </Switch>
    </Router>
  );
}

export default Routes;
