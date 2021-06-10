import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/styles.scss";
import { AppRouter } from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Spin } from "antd";

ReactDOM.render(
  <Provider store={store}>
    <Spin spinning={false} size="large" tip="Procesando">
      <AppRouter />
    </Spin>
  </Provider>,
  document.getElementById("root")
);
