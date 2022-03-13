import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import ErrorFallback from "./Components/ErrorFallback";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
