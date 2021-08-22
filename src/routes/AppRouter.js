import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import PanelScreen from "../components/Administrator/PanelScreen";
import SpinLoader from "../components/SpinLoader"

export const AppRouter = () => {
  const showSpiner = useSelector(state => state.ui.modalLoading);
  return (
    <SpinLoader show={showSpiner} message="Procesando ...">
      <Router>
        <Switch>
          <Route exact={false} path="/admin" component={PanelScreen} />
          <Route exact path="/" component={LoginScreen} />
        </Switch>
      </Router>
    </SpinLoader>
    
  );
};
