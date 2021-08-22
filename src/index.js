import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/styles.scss";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
