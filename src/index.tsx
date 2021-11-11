import { App } from "./App";
import CssBaseLine from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
