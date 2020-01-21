import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Recursive',
      'Roboto Mono',
      'Roboto',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
