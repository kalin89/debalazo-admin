import React from "react";
import { Switch, Route } from "react-router-dom";
import { BusinessScreen } from "../../components/Administrator/BusinessScreen";
import PendingScreen from "../../components/Administrator/PendingScreen";
import RequestsScreen from "../../components/Administrator/RequestsScreen";
import { UsersScreen } from "../../components/Administrator/UsersScreen";

export const AdminRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/users" component={UsersScreen} />
      <Route path="/admin/requests" component={RequestsScreen} />
      <Route path="/admin/business" component={BusinessScreen} />
      <Route path="/admin/pending" component={ PendingScreen } />
    </Switch>
  );
};
