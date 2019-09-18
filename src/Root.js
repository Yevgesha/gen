import React from "react";
import { Provider } from "react-redux";
import "./assets/reset.css";
import "./assets/index.css";
import configureStore from "./redux/store";
import App from "./App";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
