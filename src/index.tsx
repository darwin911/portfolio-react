import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { App } from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
