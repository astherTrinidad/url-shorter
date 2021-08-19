import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Redirect from "../../pages/redirect";
import NotFound from "../../pages/notFound";

function Routes() {
  const currentPathname = window.location.pathname;
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/not-found" component={NotFound} exact />
        <Route path="/:key" component={Redirect} />
      </Switch>
    </Router>
  );
}

export default Routes;
