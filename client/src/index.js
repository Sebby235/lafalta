import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("root");

const strictMode = React.createElement(
  React.StrictMode,
  null,
  React.createElement(
    Provider,
    { store: store },
    React.createElement(
      PersistGate,
      { loading: "loading", persistor: persistor },
      React.createElement(App)
    )
  )
);

const root = ReactDOM.createRoot(rootElement);
root.render(strictMode);
