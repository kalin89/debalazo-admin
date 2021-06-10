import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import PanelScreen from "../components/Administrator/PanelScreen";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact={false} path="/admin" component={PanelScreen} />
        <Route exact path="/" component={LoginScreen} />
      </Switch>
    </Router>
  );
};
