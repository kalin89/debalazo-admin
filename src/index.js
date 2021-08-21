import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/styles.scss";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import SpinLoader from "./components/SpinLoader";

console.log(store.getState());

const showSpiner = false;
ReactDOM.render(
  <Provider store={store}>
      <SpinLoader show={showSpiner} message="Procesando ...">
          <AppRouter />
      </SpinLoader>
  </Provider>,
  document.getElementById("root")
);
