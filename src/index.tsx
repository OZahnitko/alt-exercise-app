import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import { store } from "./store";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <theme.GlobalStyle />
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
